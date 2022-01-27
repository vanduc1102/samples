import React, { useState } from 'react';

import { Button, Input, notification } from 'antd';
import { ContractFactory } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { DEFAULT_CONTRACT } from '../../configurations/contract';
import workerService from '../../services/worker'
import {
    getContractABI,
    getContractBinary,
} from '../../utils/contract';

import './index.css'
const { TextArea } = Input;

const CONTRACT_FILE_NAME = 'SimpleStorage.sol';

const SmartContract: React.FC = () => {
    const [compiling, setCompiling] = useState(false);
    const [deploying, setDeploying] = useState(false);
    const [source, setSource] = useState(DEFAULT_CONTRACT);
    const [compileResult, setCompileResult] = useState('');
    const { library, active } = useWeb3React<Web3Provider>();

    const handleCompile = async () => {
        setCompiling(true);
        try {
            const compileResult = await workerService.compileContract({
                command: 'compile',
                content: source,
                contractFileName: CONTRACT_FILE_NAME,
                solidityVersion: 'v0.8.10+commit.fc410830'
            });
            notification.success({
                message: "Complied successfully, please check console.log for compilation result"
            })
            console.log("compileResult: ", compileResult);
            setCompileResult(compileResult);
        } finally {
            setCompiling(false);
        }
    }

    const handleDeploy = async () => {
        setDeploying(true);
        try {
            const contractBinary = getContractBinary(
                compileResult,
                CONTRACT_FILE_NAME,
                "SimpleStorage"
            );

            const contractABI = getContractABI(
                compileResult,
                CONTRACT_FILE_NAME,
                "SimpleStorage"
            );

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

    return <div className='Container'>
        <div className='Left'>
            <TextArea rows={4} value={source} onChange={(event) => setSource(event.target.value)} />
        </div>
        <div className='Right'>
            <Button className='Button' onClick={handleCompile} type='primary' loading={compiling} >Compile</Button>
            <Button className='Button' onClick={handleDeploy} danger disabled={!active || compiling || !compileResult} loading={deploying}>Deploy</Button>
        </div>
    </div>;
};

export default SmartContract;