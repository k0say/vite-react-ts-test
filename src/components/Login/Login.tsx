import './Login.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from "axios";
import React from 'react';
import { LOGIN_URL } from '../../../config';

async function loginUser(credentials) {
        return axios.post(LOGIN_URL, {
            username: credentials.username,
            password: credentials.password
        }).then(data => data.data)
}

function Login({ setToken }) {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        
    })

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        })
        setToken(token);
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="text"
                            required
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;