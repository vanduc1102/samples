import React from 'react';
import CompileSmartContractDemo from '../components/CompilingSmartContactDemo';
import MiningDemo from '../components/MiningDemo';
import { StyledApp } from './styled';

export function App(): React.ReactElement {
  return (
    <StyledApp>
      <header className="flex">
        <h1>Welcome to frontend!</h1>
      </header>
      <main>
        <h2>Demos:</h2>
        <MiningDemo />
        <CompileSmartContractDemo />
      </main>
    </StyledApp>
  );
}

export default App;
