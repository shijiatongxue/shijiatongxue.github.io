import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './layout';
import './index.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)
