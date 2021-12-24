import { useState } from 'react';
import styled from 'styled-components';
import { useWorker } from '../hooks/workers';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const { services: mintService } = useWorker();
  const [mint, setMint] = useState<{ hash: string; nonce: number }>({
    hash: 'null',
    nonce: 0,
  });

  const handleMint = async () => {
    console.log('Handling mint....');
    const mintResult = await mintService.mintNewCoin(
      Math.floor(Math.random() * 25),
      Date.now().toString()
    );
    setMint(mintResult);
  };

  return (
    <StyledApp>
      <button onClick={handleMint}>Mint</button>
      <div>Hash: {mint.hash}</div>
      <div>Nonce: {mint.nonce}</div>
    </StyledApp>
  );
}

export default App;
