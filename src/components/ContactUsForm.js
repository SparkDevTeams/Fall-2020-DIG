import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import contactUsFormImg from '../images/contact-us-image.svg';

const ContactUsForm = () => {
  return (
    <Container>
      <Row>
        <Col> 
          <div className='hero-img-left'>
            <img
              src={contactUsFormImg}
              className='fluid-img'
              alt='Woman holding envelope'
            />
          </div>
        </Col>
        <Col>
        <h1 className='display-4 font-weight-bold mb-3'>Contact Us</h1>
          <Form>
            
            
            <Form.Group controlId="formGroupName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          
            <Form.Group controlId="formGroupMessage">
              
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                Message
                </label>
                <textarea className="form-control" id="ormGroupMessage" rows="5"/>
              </div>
            </Form.Group>
          </Form> 
          <Button variant="primary" type="submit">
            Submit
          </Button> 
        </Col>
      </Row>
    </Container>



    
    
  );
};

export default ContactUsForm;