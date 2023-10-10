// import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Images/Logo.png'
const Navbars = () => {
  return (
    <nav className='containNavbar'>
      <div className='containNavbar__logo'>
        <img src={Logo}/>
      </div>
      <div className='containNavbar__lineaNav'>

      </div>
    <Navbar data-bs-theme="dark"
    className='containNavbar__bootstrap'>
    {/* <Container> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className='containNavbar__bootstrap--links'>
          <Nav.Link href="#home" className='linksmain'>00 HOME</Nav.Link>
          <Nav.Link href="#link" className='linksmain'>01 DESTINATION</Nav.Link>
          <Nav.Link href="#home" className='linksmain'>02 CREW</Nav.Link>
          <Nav.Link href="#link" className='linksmain'>03 TECHNOLOGY</Nav.Link>
        </Nav>
      {/* </Navbar.Collapse> */}
    {/* </Container> */}
  </Navbar>
  </nav>
);
  
}

export default Navbars