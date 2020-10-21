import React from 'react';
import navBarImg from '../images/dig-logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar expand='lg'>
      <div className='container'>
        <Navbar.Brand href='/'>
          <img
            src={navBarImg}
            className='nav-bar-logo'
            alt='Dream In Green logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='nav-bar-component' />
        <Navbar.Collapse id='nav-bar-component'>
          <Nav className='mr-auto ml-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/link'>How it works</Nav.Link>
            <Nav.Link href='/tips'>Tips</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
          <a
            type='button'
            href='#'
            className='btn btn-primary my-2 my-lg-0 py-3 px-5'
          >
            Get Started
          </a>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
