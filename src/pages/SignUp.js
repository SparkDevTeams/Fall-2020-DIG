import React from 'react';
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <div className='log-in-container'>
        <div className='log-in-form'>
          <div className='form-group mb-2'>
            <h3 className='mb-2 text-center font-weight-bold'>Sign Up</h3>
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
            <input
              type='password'
              className='form-control mb-2'
              placeholder='Confirm Password'
            />
            <button type='button' className='btn btn-secondary mb-2 btn-block'>
              Sign Up
            </button>
            <div className="text-center">
              Already have an account? <Link to='/log-in'>Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
