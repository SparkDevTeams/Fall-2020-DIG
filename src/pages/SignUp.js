import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { useAuth } from '../states/userState';
import Alert from 'react-bootstrap/Alert';

const SignUp = () => {

  //variables to keep track of input
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  //pull the signup function from the Context using a hook we made
  const { signup, user } = useAuth();

  //
  const [error, setError] = useState("")

  //function to get all values from the form and try to make an account for the user
  function handleSignUp(event){
    console.log(user.email)
    event.preventDefault()
    
    //check that none of the feilds are empty
    if(passwordRef.current.value === "" || 
       passwordConfirmRef.current.value === "" || 
       emailRef.current.value == ""){
      return setError("Please fill in all fields")
    }

    //if the passwords do not match then state an error
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      console.log(passwordRef.current.value)
      return setError("Passwords do not match")
    }
    
    //there is a problem here, the handleSignUp function needs to be async so that
    //we can wait for the signup API call to finish and check for any errors
    //something is restricting that, otherwise this works
    try{
      //is all self check are working then we can pass the arguements to the firebase API
      setError("")
      signup(emailRef.current.value, passwordRef.current.value)
    }
    catch (exception){
      setError("Failed to create account")
    }
  }

  return (
    <div className='log-in-container'>
      <div className='log-in-form'>
        <Form onSubmit={handleSignUp} className='form-group mb-2'>
          <h3 className='mb-2 text-center font-weight-bold'>Sign Up</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Control
            type='email'
            className='form-control mb-2'
            placeholder='Email'
            ref={emailRef}
          />
          <Form.Control
            type='password'
            className='form-control mb-2'
            placeholder='Password'
            ref={passwordRef}
          />
          <Form.Control
            type='password'
            className='form-control mb-2'
            placeholder='Confirm Password'
            ref={passwordConfirmRef}
          />
          <button type='submit' className='btn btn-secondary mt-3 mb-2 btn-block'>
            Sign Up
          </button>
          <div className="text-center">
            Already have an account? <Link to='/log-in'>Log In</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
