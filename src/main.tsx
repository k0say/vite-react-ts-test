import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from './config/token-interceptor';

requestInterceptor();
responseInterceptor();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
