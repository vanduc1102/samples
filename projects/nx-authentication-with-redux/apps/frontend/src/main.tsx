import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { configureFakeBackend } from './helpers';

import App from './components/App';
import { store } from './state';

configureFakeBackend();

initializeIcons(
  'https://static2.sharepointonline.com/files/fabric/assets/icons/'
);

const Providers: React.FC = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
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
