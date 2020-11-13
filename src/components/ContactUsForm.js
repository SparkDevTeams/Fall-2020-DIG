import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import contactUsFormImg from '../images/contact-us-image.svg';

const ContactUsForm = () => {
  return (
    <Row className='home-row'>
      <div className='col-lg-6'>
        <div className='hero-img-left'>
          <img
            src={contactUsFormImg}
            className='fluid-img'
            alt='Woman holding envelope'
          />
        </div>
      </div>
      <div className='col-lg-6'>
        <h1 className='display-4 font-weight-bold mb-3'>Contact Us</h1>
        <Form>
          <Form.Group controlId='formGroupName'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter Name' />
          </Form.Group>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group controlId='formGroupMessage'>
            <div className='form-group'>
              <label htmlFor='exampleFormControlTextarea1'>Message</label>
              <textarea
                className='form-control'
                id='ormGroupMessage'
                rows='5'
              />
            </div>
          </Form.Group>
        </Form>
        <div className='text-center'>
          <Button
            variant='primary'
            type='submit'
            className='my-2 my-lg-0 py-3 px-5'
          >
            Submit
          </Button>
        </div>
      </div>
    </Row>
  );
};

export default ContactUsForm;
