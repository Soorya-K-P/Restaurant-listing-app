import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-7.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        Tinny Cafe
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header