import React, { useEffect, useState } from 'react';

import { Button, Input, notification, Select, Space, Spin, Typography } from 'antd';
import { ContractFactory } from 'ethers';
import { TransactionReceipt, Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { baseURLBin, compile, CompilerAbstract, pathToURL } from '@remix-project/remix-solidity';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { TEST_CONTRACTS } from '../../configurations/contract';
import { ETHERSCAN_API_SECRET_KEY, SOLIDITY_COMPILER_VERSION, SPDX_LICENSE_IDENTIFIER } from '../../constants';
import { handleNpmImport } from '../../utils/content-resolver'
import * as etherscanClient from '../../clients/etherscan-client'


import './index.css'

const { TextArea } = Input;
const { Option } = Select;
const { Link } = Typography



const CONTRACT_FILE_NAME = 'MyContract.sol';
const CONTRACT_NAME = 'MyContract';

(function initSupportedSolcVersion() {
    (pathToURL as any)["soljson-v0.8.11+commit.d7f03943.js"] = baseURLBin;
})();


const SmartContract: React.FC = () => {
    const [compiling, setCompiling] = useState(false);
    const [deploying, setDeploying] = useState(false);
    const [publishingError, setPublishingError] = useState(false);
    const [source, setSource] = useState(TEST_CONTRACTS[0].content);
    const [compileResult, setCompileResult] = useState<CompilerAbstract>();
    const [transactionReceipt, setTransactionReceipt] = useState<TransactionReceipt>();
    const { library, active, chainId } = useWeb3React<Web3Provider>();
    const [publishing, setPublishing] = useState(false);
    const [etherscanApiKey, setEtherscanApiKey] = useState('');

    useEffect(() => {
        const key = localStorage.getItem(ETHERSCAN_API_SECRET_KEY);
        setEtherscanApiKey(key || '');
    }, [])

    const handleCompile = async () => {
        setCompiling(true);
        setPublishingError(false);
        try {
            const response = await compile(
                {
                    [CONTRACT_FILE_NAME]: {
                        content: source
                    }
                }
                , {
                    version: SOLIDITY_COMPILER_VERSION
                }, handleNpmImport) as CompilerAbstract;

            if (response.data.errors) {
                notification.error({
                    message: response.data.errors[0].formattedMessage
                })
                return;
            }
            notification.success({
                message: "Complied successfully, please check console.log for compilation result"
            })
            console.log("All contract compileResult: ", response);
            setCompileResult(response);
        } finally {
            setCompiling(false);
        }
    }

    const handleDeploy = async () => {
        setDeploying(true);
        try {
            const compiledContract = compileResult?.getContract(CONTRACT_NAME);
            const contractBinary = '0x' + compiledContract?.object.evm.bytecode.object;
            const contractABI = compiledContract?.object.abi;

            const signer = library?.getSigner();

            const contractFactory: ContractFactory = new ContractFactory(
                contractABI,
                contractBinary,
                signer
            );

            const deployingContract = await contractFactory.deploy();
            const txReceipt = await deployingContract.deployTransaction.wait(1);
            notification.success({
                message: "Deploy contract successfully, please check console.log for transaction receipt"
            })
            console.log("transactionReceipt: ", txReceipt);
            setTransactionReceipt(txReceipt);
            await handlePublishing(txReceipt, compileResult);
        } finally {
            setDeploying(false);
        }
    }

    const handleContractChange = (value: string) => {
        const foundContract = TEST_CONTRACTS.find(contract => contract.name === value);
        if (foundContract) {
            setSource(foundContract.content)
        }
    }

    const handlePublishing = async (txReceipt?: TransactionReceipt, compileResult?: CompilerAbstract) => {
        if (!etherscanApiKey) {
            notification.error({
                message: 'No Etherscan API Key found, Skipped publishing source code'
            })
            return;
        }
        setPublishing(true);
        try {
            const verifiedResponse = await etherscanClient.verifyAndPublicContractSourceCode(etherscanApiKey, chainId + '',
                {
                    address: txReceipt?.contractAddress || '',
                    name: CONTRACT_FILE_NAME + ":" + CONTRACT_NAME,
                    sourceCode: JSON.stringify({
                        sources: compileResult?.source.sources,
                        language: "Solidity",
                    }),
                    compilerversion: 'v' + SOLIDITY_COMPILER_VERSION,
                    licenseType: SPDX_LICENSE_IDENTIFIER.MIT
                }
            )
            console.log("verifiedResponse: ", verifiedResponse.data);
            if (verifiedResponse.data.status === "0") {
                notification.error({
                    message: 'Error on publishing contract source',
                    description: verifiedResponse.data.message + " : " + verifiedResponse.data.result
                })
                setPublishingError(true);
                return;
            }
            if (verifiedResponse.data.status === "1") {
                notification.success({
                    message: 'Publishing contract source successfully',
                    description: "Published GUID: " + verifiedResponse.data.result
                })
            }
            const verifyStatusResponse = await etherscanClient.codeVerificationStatus(etherscanApiKey, chainId + '', (verifiedResponse.data as any).result);
            console.log("verifyStatusResponse : ", verifyStatusResponse.data);
        } finally {
            setPublishing(false);
        }
    }

    const handleApiKeyChange = (key: string) => {
        setEtherscanApiKey(key)
        localStorage.setItem(ETHERSCAN_API_SECRET_KEY, key);
    }

    const handleRetryPublishing = async () => {
        await handlePublishing(transactionReceipt, compileResult);
    }

    const handleDownloadJsonInput = async () => {
        const contentType = 'application/octet-stream';
        const content = JSON.stringify({
            sources: compileResult?.source.sources,
            language: "Solidity",
        });
        var a = document.createElement('a');
        var blob = new Blob([content], { 'type': contentType });
        a.href = window.URL.createObjectURL(blob);
        a.download = "Standard-Input-Json-" + Date.now() + ".json";
        a.click();
    }

    return <div className='Container'>
        <div className='Left'>
            <Select defaultValue={TEST_CONTRACTS[0].name} onChange={handleContractChange} style={{ width: '250px' }}>
                {TEST_CONTRACTS.map((contract) => (
                    <Option key={contract.name}>{contract.name}</Option>
                ))}
            </Select>
            <TextArea className='CodeEditor' autoSize value={source} showCount onChange={(event) => setSource(event.target.value)} />
        </div>
        <div className='Right'>
            <div className='ButtonGroup'>
                <Button onClick={handleCompile} type='primary' disabled={!source || deploying || publishing} loading={compiling} >Compile</Button>
                <Button onClick={handleDeploy} danger disabled={!active || compiling || !compileResult} loading={deploying}>Deploy</Button>
                <Button onClick={handleRetryPublishing} danger disabled={!publishingError} >Retry publishing</Button>
                <Button onClick={handleDownloadJsonInput} danger disabled={!active || compiling || !compileResult} >Download JSON</Button>
            </div>
            <Space direction="vertical">
                <Link href='https://docs.etherscan.io/getting-started/viewing-api-usage-statistics' target='_blank' rel="noreferrer">Get EtherScan API Key</Link>
                <Input.Password
                    onChange={(event) => handleApiKeyChange(event.target.value)}
                    value={etherscanApiKey}
                    placeholder="Etherscan API Key"
                    autoComplete={"false"}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Space>
            {
                publishing && <Spin tip="Contract deployed, publishing source code...">
                    <div style={{
                        height: "50px",
                        width: "100%"
                    }}>

                    </div>
                </Spin>
            }
        </div>
    </div>;
};

export default SmartContract;
