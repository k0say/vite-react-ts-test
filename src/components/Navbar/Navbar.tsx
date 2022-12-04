import React from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Bar() {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant='dark' style={{ margin: 0, height: 55 }}>
          <Container>
            <Navbar.Brand href='/sito'>
            <img
              src="/react.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            Test App!
            </Navbar.Brand>
            <Navbar.Toggle />
            <Button variant='dark' onClick={() => navigate(-1)}>GO BACK</Button>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text onClick={logout}>
                Log out 
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

function logout() {
    localStorage.clear();
    window.location.reload();
}

export default Bar;