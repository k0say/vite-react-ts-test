import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from './config/token-interceptor';
import { BrowserRouter } from 'react-router-dom';

requestInterceptor();
responseInterceptor();

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
)
