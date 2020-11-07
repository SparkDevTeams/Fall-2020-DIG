import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logoImg from '../images/dig-logo.png';

const NavBar = () => {
  const [activeKey, setActiveKey] = useState(-1);

  const location = useLocation();

  //the home page contact form picture col needs to be set col-lg-6 so that it wraps correctly
  useEffect(() => {
    if(location.pathname.startsWith("/questionnaire")){
      setActiveKey(1);
    }
    else if(location.pathname.startsWith("/tips")){
      setActiveKey(2);
    }
    else if(location.pathname.startsWith("/profile")){
      setActiveKey(3);
    }
    else if(location.pathname == "/"){
      setActiveKey(0);
    }
    else{
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
          <Link to='/questionnaire' className='btn btn-primary my-2 my-lg-0 py-3 px-5'>
            Get Started
          </Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
