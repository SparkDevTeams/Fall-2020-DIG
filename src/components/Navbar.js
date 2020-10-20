import React from 'react';
import navBarImg from '../images/dig-logo.png';

const NavBar = () => {
  return (
  	<nav className="navbar navbar-expand-lg navbar-light mb-3">
    	<div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={navBarImg}
            className="nav-bar-logo"
            alt="Dream In Green logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center text-lg-left"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home<span className="sr-only">(current)</span>
							</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">How it works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tips</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <a
            type="button"
            href="#"
            className="btn btn-primary my-2 my-lg-0 py-3 px-5"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
	);
};
export default NavBar;