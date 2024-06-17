import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@actionpower/daglo-ui/dist/styles/index.css';
import '@actionpower/daglo-ui/dist/styles/calendarStyle.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
