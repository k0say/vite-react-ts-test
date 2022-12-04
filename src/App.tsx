import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import useToken from './components/App/useToken';
import Login from './components/Login/Login';
import Bar from './components/Navbar/Navbar';
import Preferences from './components/Preferences/Preferences';
import Sito from './components/Sito/Siti';
import Installations from './components/Installations/Installations';
import { Button } from 'react-bootstrap';


function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }
    return (
        <>
            <Bar />
            <div className='content'>
                    <Routes>
                        <Route path='/' element={<Sito />} />
                        <Route path='/sito' element={<Sito />} />
                        <Route path='/installations' element={<Installations />} />
                        <Route path='/preferences' element={<Preferences />} />
                    </Routes>
            </div>
        </>
    )
}

export default App