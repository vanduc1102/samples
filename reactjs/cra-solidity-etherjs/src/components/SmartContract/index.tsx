import React, { useState } from 'react';

import { Button, Input, notification, Select } from 'antd';
import { ContractFactory } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { baseURLBin, compile, CompilerAbstract, pathToURL } from '@remix-project/remix-solidity';

import { TEST_CONTRACTS } from '../../configurations/contract';
import { handleNpmImport } from '../../utils/content-resolver'

import './index.css'

const { TextArea } = Input;
const { Option } = Select;


const DEFAULT_VERSION = "soljson-v0.8.11+commit.d7f03943.js";
const CONTRACT_FILE_NAME = 'MyContract.sol';
const CONTRACT_NAME = 'MyContract';

(function initSupportedSolcVersion() {
    (pathToURL as any)[DEFAULT_VERSION] = baseURLBin;
    (pathToURL as any)[DEFAULT_VERSION] = baseURLBin;
})();


const SmartContract: React.FC = () => {
    const [compiling, setCompiling] = useState(false);
    const [deploying, setDeploying] = useState(false);
    const [source, setSource] = useState(TEST_CONTRACTS[0].content);
    const [compileResult, setCompileResult] = useState<Record<string, any>>();
    const { library, active } = useWeb3React<Web3Provider>();

    const handleCompile = async () => {
        setCompiling(true);
        try {
            const response = await compile(
                {
                    [CONTRACT_FILE_NAME]: {
                        content: source
                    }
                }
                , {
                    version: DEFAULT_VERSION
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
            setCompileResult(response.getContract(CONTRACT_NAME));
        } finally {
            setCompiling(false);
        }
    }

    const handleDeploy = async () => {
        setDeploying(true);
        try {
            const contractBinary = '0x' + compileResult?.object.evm.bytecode.object;
            const contractABI = compileResult?.object.abi;

            const signer = library?.getSigner();

            const contractFactory: ContractFactory = new ContractFactory(
                contractABI,
                contractBinary,
                signer
            );

            const deployingContract = await contractFactory.deploy();
            const transactionReceipt = await deployingContract.deployTransaction.wait(1);
            notification.success({
                message: "Deploy contract successfully, please check console.log for transaction receipt"
            })
            console.log("transactionReceipt: ", transactionReceipt);
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
            <Button className='Button' onClick={handleCompile} type='primary' loading={compiling} disabled={!source} >Compile</Button>
            <Button className='Button' onClick={handleDeploy} danger disabled={!active || compiling || !compileResult} loading={deploying}>Deploy</Button>
        </div>
    </div>;
};

export default SmartContract;