import axios from 'axios';
import React from 'react';

class Sito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    getSiti() {
        return axios.get('http://localhost:8000/oye/sito/').then(res => {
            return res.data;
            // this.setState({ data: data });
        })
    }

    handleGetSiti = async () =>{
        this.setState({data: await this.getSiti()});
        // const x = await this.getSiti();
        // console.log(x)
    }

    componentDidMount() {
        // this.getSiti()
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