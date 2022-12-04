import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../config";

function Installations() {

    const [searchparams] = useSearchParams();
    const id = searchparams.get('id');
    const nome = searchparams.get('nome');

    const getInstallations = () => {
        return axios.get(BASE_URL + `sito/${id}/impianti/`).then(res => {
            return res.data;
        }).catch(err => {
            setError(err.message);
        })
    }

    const [installation, setInstallation] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getInstallations().then(res => setInstallation(res))
    }, [])

    return (
        <>
            {
                installation ? 
                installation.map(i => (
                <Card key={i.id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{i.nome}</Card.Title>
                        <Card.Text>
                            {i?.ubicazione}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                ))
                : (<h1 style={errorStyle} key={1}>{error}</h1>)
            }
            {/* {JSON.stringify(installation)}
            {installation.map(i => (<p key={i.id}>ID: {i.id}</p>))} */}
        </>
    );
}
const errorStyle = {
    'placeItems': 'center',
    'height': 'inherit',
    'display': 'flex',
    'justify-content': 'center',
}


export default Installations;