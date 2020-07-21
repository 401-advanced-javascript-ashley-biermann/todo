import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';

const Header = () => {

  return (
    <Navbar bg="primary" expand="lg">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default Header;