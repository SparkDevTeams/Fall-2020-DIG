import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

const LogIn = () => {
  return (
    <div>
      <NavBar />
      <div className='log-in-container'>
        <div className='log-in-form'>
          <div className='form-group mb-2'>
            <h3 className='mb-2 text-center font-weight-bold'>Log in</h3>
            <input
              type='email'
              className='form-control mb-2'
              placeholder='Email'
            />
            <input
              type='password'
              className='form-control mb-2'
              placeholder='Password'
            />
            <button type='button' className='btn btn-secondary mb-2 btn-block'>
              Log In
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
