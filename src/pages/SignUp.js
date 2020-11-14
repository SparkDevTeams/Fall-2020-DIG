import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../states/userState';
import Alert from 'react-bootstrap/Alert';
import { Row, Col } from 'react-bootstrap';
import logoImg from '../images/dig-logo.png';

const SignUp = () => {
  //variables to keep track of input
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const schoolRef = useRef();

  //pull the signup function from the Context using a hook we made
  const { signup, registerUser } = useAuth();

  //state to keep track of current error to display to the user
  const [error, setError] = useState('');

  //loading state to make sure that user does not accidentally try to make more than one
  //user while the current code for signing up is running
  const [loading, setLoading] = useState(false);

  //hook that lets us redirct user to a given page using push()
  const redirect = useHistory();

  //function to get all values from the form and try to make an account for the user
  async function handleSignUp(event) {
    event.preventDefault();

    //check that none of the feilds are empty
    if (
      passwordRef.current.value === '' ||
      passwordConfirmRef.current.value === '' ||
      emailRef.current.value === '' ||
      firstNameRef.current.value === '' ||
      lastNameRef.current.value === '' ||
      schoolRef.current.value === ''
    ) {
      return setError('Please fill in all fields');
    }

    //if the passwords do not match then state an error
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    //there is a problem here, the handleSignUp function needs to be async so that
    //we can wait for the signup API call to finish and check for any errors
    //something is restricting that, otherwise this works

    try {
      //is all self check are working then we can pass the arguements to the firebase API
      setError('');
      setLoading(true);
      let response = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );

      registerUser(
        response.user.uid,
        firstNameRef.current.value,
        lastNameRef.current.value,
        schoolRef.current.value
      );

      //if the sign up is successful then we can redirect to the questionnaire
      redirect.push('/questionnaire');
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  return (
    <div className='log-in-container'>
      <div className='log-in-form'>
        <Form onSubmit={handleSignUp} className='form-group mb-2'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={logoImg}
              className='nav-bar-logo'
              alt='Dream In Green logo'
            />
          </div>
          <h3 className='mb-2 text-center font-weight-bold'>Sign Up</h3>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Row>
            <Col className='pr-0'>
              <Form.Group className='mb-0'>
                <Form.Label className='mb-0'>Email:</Form.Label>
                <Form.Control
                  type='email'
                  className='form-control mb-2'
                  placeholder='Email'
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group className='mb-0'>
                <Form.Label className='mb-0'>Passord:</Form.Label>
                <Form.Control
                  type='password'
                  className='form-control mb-2'
                  placeholder='Password'
                  ref={passwordRef}
                />
              </Form.Group>
              <Form.Group className='mb-0'>
                <Form.Label className='mb-0'>Confirm Password:</Form.Label>
                <Form.Control
                  type='password'
                  className='form-control mb-2'
                  placeholder='Confirm Password'
                  ref={passwordConfirmRef}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-0'>
                <Form.Label className='mb-0'>First Name:</Form.Label>
                <Form.Control
                  type='text'
                  className='form-control mb-2'
                  placeholder='First Name'
                  ref={firstNameRef}
                />
              </Form.Group>
              <Form.Group className='mb-0'>
                <Form.Label className='mb-0'>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  className='form-control mb-2'
                  placeholder='Last Name'
                  ref={lastNameRef}
                />
              </Form.Group>
              <Form.Group className='mb-0'>
                <Form.Label className='mb-0'>School/Work:</Form.Label>
                <Form.Control
                  type='text'
                  className='form-control mb-2'
                  placeholder='School/Work'
                  ref={schoolRef}
                />
              </Form.Group>
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type='submit'
              disabled={loading}
              className='btn btn-secondary mt-3 mb-2 btn-block'
              style={{ maxWidth: '50%' }}
            >
              Sign Up
            </button>
          </div>
          <div className='text-center'>
            Already have an account? <Link to='/log-in'>Log In</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
