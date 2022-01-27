import React, { useState } from 'react';

import { Button, Input, notification } from 'antd';
import workerService from '../../services/worker'

import './index.css'

const { TextArea } = Input;

const DEFAULT_CONTRACT = `
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}


`;

const SmartContract: React.FC = () => {
    const [source, setSource] = useState(DEFAULT_CONTRACT);

    const handleCompile = async () => {
        const compileResult = await workerService.compileContract({
            command: 'compile',
            content: source,
            contractFileName: 'test',
            solidityVersion: 'v0.8.10+commit.fc410830'
        });
        notification.success({
            message: "Complied successfully, please check console.log for compilation result"
        })
        console.log("compileResult: ", compileResult);
    }

    const handleDeploy = () => {

    }

    return <div className='Container'>
        <div className='Left'>
            <TextArea rows={4} value={source} onChange={(event) => setSource(event.target.value)} />
        </div>
        <div className='Right'>
            <Button className='Button' onClick={handleCompile} type='primary'>Compile</Button>
            <Button className='Button' onClick={handleDeploy} danger>Deploy</Button>
        </div>
    </div>;
};

export default SmartContract;
