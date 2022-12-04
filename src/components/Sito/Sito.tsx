import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../../../config';

class Sito extends React.Component {
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

    componentDidMount() {
    }

    render() {
        return (
            <>
                <button onClick={this.handleGetSiti}>GET SITI</button>
                {
                    this.state.data.map(data => (<li key={data.id}>{data.nome} - {data.ubicazione} </li>))
                }
            </>
        );
    }
}

export default Sito;

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