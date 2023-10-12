// import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Images/Logo.png'
import Menu from './Images/icons8-menú-50.png'
const Navbars = () => {
  return (
    <nav>
      <div className='hamburguer'>
        <div className='containNavbar__logo'>
          <img src={Logo}/>
        </div>
        <img src={Menu}/>
      </div>
    <div className='containNavbar'>
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
          <Nav.Link href="#link" className='linksmain'>00 HOME</Nav.Link>
          <Nav.Link href="#link" className='linksmain'>01 DESTINATION</Nav.Link>
          <Nav.Link href="#link" className='linksmain'>02 CREW</Nav.Link>
          <Nav.Link href="#link" className='linksmain'>03 TECHNOLOGY</Nav.Link>
        </Nav>
      {/* </Navbar.Collapse> */}
    {/* </Container> */}
      </Navbar>
    </div>
    </nav>
);
  
}

export default Navbars