import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { BrowserRouter } from 'react-router-dom';

import { configureFakeBackend } from './helpers';

import App from './components/App';

configureFakeBackend();
initializeIcons(
  'https://static2.sharepointonline.com/files/fabric/assets/icons/'
);

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
);
