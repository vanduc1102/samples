import React, { useEffect, useState } from 'react';

import { Button, Input, notification, Select, Space, Spin, Typography } from 'antd';
import { ContractFactory, utils } from 'ethers';
import { TransactionReceipt, Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { baseURLBin, compile, CompilerAbstract, pathToURL } from '@remix-project/remix-solidity';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { TEST_CONTRACTS } from '../../configurations/contract';
import { BSC_CHAIN_IDS, ETHERSCAN_API_SECRET_KEY, SOLIDITY_COMPILER_VERSION, SPDX_LICENSE_IDENTIFIER } from '../../constants';
import { handleNpmImport } from '../../utils/content-resolver'
import * as etherscanClient from '../../clients/etherscan-client'


import './index.css'

const { TextArea } = Input;
const { Option } = Select;
const { Link } = Typography;

(function initSupportedSolcVersion() {
    (pathToURL as any)["soljson-v0.8.11+commit.d7f03943.js"] = baseURLBin;
})();

const CONTRACT_NAME_REGEX = /contract\s(\S+)\s/;

const SmartContract: React.FC = () => {
    const [compiling, setCompiling] = useState(false);
    const [deploying, setDeploying] = useState(false);
    const [publishingError, setPublishingError] = useState(false);
    const [source, setSource] = useState(TEST_CONTRACTS[0].content);
    const [selectedContract, setSelectedContract] = useState(TEST_CONTRACTS[0].name);
    const [compileResult, setCompileResult] = useState<CompilerAbstract>();
    const [transactionReceipt, setTransactionReceipt] = useState<TransactionReceipt>();
    const { library, active, chainId } = useWeb3React<Web3Provider>();
    const [publishing, setPublishing] = useState(false);
    const [etherscanApiKey, setEtherscanApiKey] = useState('');
    const [contractName, setContractName] = useState('');

    const testConstructorArguments = [
        'TORO DEP TRAI NHAT LANG',
        'TORO',
        utils.parseEther('0.05'),
        10000,
        1,
        'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/hidden.json'
    ];

    const hasArgs = selectedContract === "ERC71 - With Args";

    useEffect(() => {
        const key = localStorage.getItem(ETHERSCAN_API_SECRET_KEY);
        setEtherscanApiKey(key || '');
    }, [])

    useEffect(() => {
        if (source) {
            const matches = CONTRACT_NAME_REGEX.exec(source);
            if (matches && matches[1]) {
                setContractName(matches[1])
            }
        }
    }, [source])

    const handleCompile = async () => {
        setCompiling(true);
        setPublishingError(false);
        try {
            const response = await compile(
                {
                    [contractName + '.sol']: {
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
            const compiledContract = compileResult?.getContract(contractName);
            const contractBinary = '0x' + compiledContract?.object.evm.bytecode.object;
            const contractABI = compiledContract?.object.abi;

            const signer = library?.getSigner();

            const contractFactory: ContractFactory = new ContractFactory(
                contractABI,
                contractBinary,
                signer
            );

            let deployingContract;

            if (hasArgs) {
                deployingContract = await contractFactory.deploy(...testConstructorArguments);

            } else {
                deployingContract = await contractFactory.deploy();
            }
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
        setSelectedContract(value);
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
            const argsAbiEncoded = utils.defaultAbiCoder.encode([
                'string',
                'string',
                'uint256',
                'uint256',
                'uint256',
                'string',
            ], testConstructorArguments);

            const verifiedResponse = await etherscanClient.verifyAndPublicContractSourceCode(etherscanApiKey, chainId + '',
                {
                    address: txReceipt?.contractAddress || '',
                    name: contractName + ".sol:" + contractName,
                    sourceCode: JSON.stringify({
                        sources: compileResult?.source.sources,
                        language: "Solidity",
                    }),
                    compilerversion: 'v' + SOLIDITY_COMPILER_VERSION,
                    licenseType: SPDX_LICENSE_IDENTIFIER.MIT,
                    ...(hasArgs && { constructorArguments: argsAbiEncoded })
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
            <Typography> Contract Name : {contractName}</Typography>
            <TextArea className='CodeEditor' autoSize value={source} showCount onChange={(event) => setSource(event.target.value)} />
        </div>
        <div className='Right'>
            <div className='ButtonGroup'>
                <Button onClick={handleCompile} type='primary' disabled={!source || deploying || publishing} loading={compiling} >Compile</Button>
                <Button onClick={handleDeploy} danger disabled={!active || compiling || !compileResult} loading={deploying}>Deploy</Button>
                <Button onClick={handleRetryPublishing} danger disabled={!publishingError} >Retry publishing</Button>
                <Button onClick={handleDownloadJsonInput} danger disabled={!active || compiling || !compileResult} >Download Standard-Input-Json</Button>
            </div>
            <Space direction="vertical">
                <Link href={BSC_CHAIN_IDS.includes(chainId || 0) ? 'https://docs.bscscan.com/getting-started/viewing-api-usage-statistics' : 'https://docs.etherscan.io/getting-started/viewing-api-usage-statistics'} target='_blank' rel="noreferrer">Get Explorer API Key</Link>
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
