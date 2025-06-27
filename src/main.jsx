import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// 👇 BrowserRouter 대신 HashRouter import!
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* 👇 BrowserRouter → HashRouter로 교체 */}
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);