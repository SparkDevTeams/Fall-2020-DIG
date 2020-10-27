import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logoImg from '../images/dig-logo.png';

const NavBar = () => {
  const [activeKey, setActiveKey] = useState(0);

  return (
    <Navbar expand='lg'>
      <div className='container'>
        <Navbar.Brand as={Link} to='/'>
          <img
            src={logoImg}
            className='nav-bar-logo'
            alt='Dream In Green logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='nav-bar-component' />
        <Navbar.Collapse id='nav-bar-component'>
          <Nav
            className='mr-auto ml-auto'
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
          >
            <Nav.Link as={Link} to='/' eventKey={0}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/survey' eventKey={1}>
              How it works
            </Nav.Link>
            <Nav.Link as={Link} to='/tips' eventKey={2}>
              Tips
            </Nav.Link>
            <Nav.Link as={Link} to='/survey' eventKey={3}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/points' eventKey={4}>
              Points
            </Nav.Link>
          </Nav>
          <Link to='/log-in' className='btn btn-primary my-2 my-lg-0 py-3 px-5'>
            Get Started
          </Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
