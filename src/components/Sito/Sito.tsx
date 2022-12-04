import React from "react";
import { Button, Card } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import MapChart from '../Map/Map';

function SitoTemplate({ sito }) {

    const navigate = useNavigate();

    const navigateToNext = (id, nome) => {
        navigate({
            pathname: '/installations',
            search: createSearchParams({
                id: id,
                nome: nome
            }).toString()
        })
    }

    return (
        <>
            <div className="container">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{sito.nome}</Card.Title>
                        <Card.Text>
                            {sito.ubicazione}
                        </Card.Text>
                        <Button variant="primary" onClick={() => navigateToNext(sito.id, sito.nome)}>Go to installation</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default SitoTemplate;
