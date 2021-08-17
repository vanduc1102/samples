import { ThemeProvider } from '@fluentui/react';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';

export function App() {
  return (
    <ThemeProvider>
      <LoginPage />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
