import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from './config/token-interceptor';

requestInterceptor();
responseInterceptor();

// // For GET requests
// axios.interceptors.request.use(
//     (req) => {
//         const token = localStorage.getItem("token")
//         req.headers = {
//             'Authorization': `Token ${JSON.parse(token).token}`
//         };
//         return req;

//     },
//     (err) => {
//         return Promise.reject(err);
//     }
// );

// // For POST requests
// axios.interceptors.response.use(
//     (res) => {
//         // Add configurations here
//         if (res.status === 201) {
//             console.log('Posted Successfully');
//         }
//         return res;
//     },
//     (err) => {
//         return Promise.reject(err);
//     }
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
