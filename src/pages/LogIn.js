import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const LogIn = () => {
  return (
    <div className='log-in-container'>
      <Form className='log-in-form'>
        <div className='form-group mb-2'>
          <h3 className='mb-2 text-center font-weight-bold'>Log in</h3>
          <Form.Control
            type='email'
            className='form-control mb-2'
            placeholder='Email'
          />
          <Form.Control
            type='password'
            className='form-control mb-2'
            placeholder='Password'
          />
          <button type='button' className='btn btn-secondary mt-3 mb-2 btn-block'>
            Log In
          </button>
          <div className="text-center">
            Need an account? <Link to='/sign-up'>Sign Up</Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LogIn;
