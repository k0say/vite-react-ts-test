import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: "http://localhost:8000/oye/",
// });

export function requestInterceptor() {
    axios.interceptors.request.use(
        (req) => {
            const token = localStorage.getItem("token")
            req.headers = {
                'Authorization': `Token ${JSON.parse(token).token}`
            };
            return req;

        },
        (err) => {
            return Promise.reject(err);
        }
    );
}
export function responseInterceptor() {
    axios.interceptors.response.use(
        (res) => {
            if (res.status === 201) {
                console.log('Posted Successfully');
            }
            return res;
        },
        (err) => {
            return Promise.reject(err);
        }
    );
}
// import axios from 'axios';

// export function requestInterceptor() {
//     axios.interceptors.request.use(
//         request => {
//             console.log(request)
//             // if(request.url) {
//             //     const token = localStorage.getItem("token")
//             //     console.log(token)
//             //     // options =  {headers: {Authorization: `Token ${token}`}};
//             //     request.headers.common.Authorization = `Token ${token}`;
//             //     return request;
//             // }
//         }
//     )
// }

// export function responseInterceptor() {
//     axios.interceptors.response.use(
//         response => {
//             console.log(response)
//             // if(response.url) {
//             //     const token = localStorage.getItem("token")
//             //     console.log(token)
//             //     // options =  {headers: {Authorization: `Token ${token}`}};
//             //     response.headers.common.Authorization = `Token ${token}`;
//             //     return response;
//             // }
//         }
//     )
// }