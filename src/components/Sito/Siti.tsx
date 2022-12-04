import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../../../config';
import MapChart from '../Map/Map';
import SitoTemplate from './Sito';
import './Sito.css';

class Siti extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    getSiti() {
        return axios.get(BASE_URL+`sito/`).then(res => {
            return res.data;
        })
    }

    handleGetSiti = async () =>{
        this.setState({data: await this.getSiti()});
    }

    async componentDidMount() {
        this.setState({data: await this.getSiti()});
    }

    getRandomKey() {
        return Math.random().toString();
    }

    render() {
        return (
            <>
                <div className='container'>
                    <div className='sito-cards'>
                    {
                        this.state['data'].map(data => (
                            <SitoTemplate key={this.getRandomKey()} sito={data}></SitoTemplate>
                        ))
                    }
                    </div>
                    <MapChart></MapChart>
                </div>
            </>
        );
    }
}

export default Siti;

// import axios from 'axios';
// import React from 'react';
// import { useEffect, useState } from 'react';

// function Sito() {

//     const [list, setList] = useState([]);

//     async function getSiti() {
//         return (await axios.get('http://localhost:8000/oye/sito/')).data
//     }

//     const handleGetSiti = async s => {
//         const siti = await getSiti();
//         setList(siti);
//     }

//     useEffect(() => {
        
//     }, [])

//     return (
//         <>
//             <button onClick={handleGetSiti}>CLICCAMI</button>
//             {list.forEach(val => <h3 key={val.id}>{val.id}</h3>)}
//         </>
//     );
// }

// export default Sito;