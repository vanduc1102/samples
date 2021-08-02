import React, { useState } from "react";
import "./App.css";

import { useAddTwoNumbersWorker, useWorker } from "./hooks/App";

function App() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [compileResult, setCompileResult] = useState<string>("");
  const [contractContent, setContactContent] =
    useState<string>(StorageContract);
  const { total } = useAddTwoNumbersWorker(number1, number2);

  const { workerApi } = useWorker();

  const handleCompile = async () => {
    console.log("compile: ", Date.now());
    const result = await workerApi.solidityCompiler({
      command:'compile',
      content:contractContent
    });
    console.log("compile result : ", result);
    setCompileResult(result);
  };

  return (
    <div className="App">
      <div className="App">
        <h1>Web Workers in action!</h1>

        <div>
          <label>Number to add: </label>
          <input
            type="number"
            onChange={(e) => setNumber1(parseInt(e.target.value))}
            value={number1}
          />
        </div>
        <div>
          <label>Number to add: </label>
          <input
            type="number"
            onChange={(e) => setNumber2(parseInt(e.target.value))}
            value={number2}
          />
        </div>
        <h2>Total: {total}</h2>
      </div>
      <button onClick={handleCompile}>Compile</button>
      <div
        style={{
          margin: "auto",
          display: "flex",
        }}
      >
        <div>
          <h3>Source Code</h3>
          <textarea
            value={contractContent}
            onChange={(event) => setContactContent(event.target.value)}
          ></textarea>
        </div>
        <div>
          <h3>Output</h3>
          <textarea defaultValue={compileResult}></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;

const StorageContract = `
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {

    uint256 number;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}
`;
