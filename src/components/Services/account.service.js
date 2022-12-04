import { BehaviorSubject } from 'rxjs';
import axios from 'axios';

// import { history } from '_helpers';

const baseUrl = `127.0.0.1:8000`;
const accountSubject = new BehaviorSubject(null);

export const accountService = {
    login,
    apiAuthenticate,
    logout,
    delete: _delete,
    account: accountSubject.asObservable(),
    get accountValue () { return accountSubject.value; }
};

async function login({username, password}) {

    const { authResponse } = await new Promise(window.FB.login);
    if (!authResponse) return;

    await apiAuthenticate(authResponse.accessToken);

    // get return url from location state or default to home page
    const { from } = history.location.state || { from: { pathname: "/" } };
    history.push(from);
}

async function apiAuthenticate(accessToken) {
    // authenticate with the api using a facebook access token,
    // on success the api returns an account object with a JWT auth token
    const response = await axios.post(`${baseUrl}/get-token/`, { accessToken });
    const account = response.data;
    accountSubject.next(account);
    startAuthenticateTimer();
    return account;
}

function logout() {
    accountSubject.next(null);
    // history.push('/login');
}
