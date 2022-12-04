import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import useToken from './components/App/useToken';
import Login from './components/Login/Login';
import Bar from './components/Navbar/Navbar';
import Preferences from './components/Preferences/Preferences';
import Sito from './components/Sito/Sito';


function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }
    return (
        <>
            <Bar />
            <div className='content'>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Sito />} />
                        <Route path='/sito' element={<Sito />} />
                        <Route path='/preferences' element={<Preferences />} />
                        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App