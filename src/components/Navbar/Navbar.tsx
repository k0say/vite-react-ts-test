import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Bar() {
    return (
        <Navbar bg="dark" variant='dark' style={{ margin: 0, height: 55 }}>
          <Container>
            <Navbar.Brand>Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
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