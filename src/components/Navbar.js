import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logoImg from '../images/dig-logo.png';

const NavBar = () => {
  const [activeKey, setActiveKey] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if(location.pathname == "/")
    {
      console.log("We are home");
      setActiveKey(0);
    }
    else if(location.pathname == "/questionnaire")
    {
      console.log("I love questions");
      setActiveKey(1);
    }
    else if(location.pathname == "/tips")
    {
      console.log("So much info :o");
      setActiveKey(2);
    }
    else if(location.pathname == "/profile")
    {
      console.log("Look at that pic");
      setActiveKey(3);
    }
    else
    {
      console.log("Where am I?");
      setActiveKey(-1);
    }
  },[location]);

  return (
    <Navbar expand='lg'>
      <div className='container'>
        <Navbar.Brand as={Link} to='/' onClick={() => setActiveKey(0)}>
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
            <Nav.Link as={Link} to='/questionnaire' eventKey={1}>
              Questionnaire
            </Nav.Link>
            <Nav.Link as={Link} to='/tips' eventKey={2}>
              Tips
            </Nav.Link>
            <Nav.Link as={Link} to='/profile' eventKey={3}>
              Profile
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
