import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DefaultProvider} from "./context/DefaultContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DefaultProvider>
    <App />
  </DefaultProvider>
);

