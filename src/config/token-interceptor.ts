import axios from "axios";


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