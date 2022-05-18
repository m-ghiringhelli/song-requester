import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProvideAuth } from './context/ProvideAuth';
import { ProvideRequest } from './context/RequestContext';

render(
  <React.StrictMode>
    <ProvideAuth>
      <ProvideRequest>
        <App />
      </ProvideRequest>
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById('root')
);
