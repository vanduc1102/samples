import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { configureFakeBackend } from './helpers';

import App from './app';

configureFakeBackend();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
