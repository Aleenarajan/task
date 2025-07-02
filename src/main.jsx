import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Fixed import path
import './index.css';         // Fixed casing

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);