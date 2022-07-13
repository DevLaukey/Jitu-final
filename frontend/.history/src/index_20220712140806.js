import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store } from './redux/store';
import {provider} from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
