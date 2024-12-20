import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
);
