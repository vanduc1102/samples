import { DefaultButton, ThemeProvider } from '@fluentui/react';
import LoginPage from '../components/LoginPage';

export function App() {
  return (
    <ThemeProvider>
       <LoginPage />
    </ThemeProvider>
  );
}

export default App;
