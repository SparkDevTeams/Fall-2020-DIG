import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import successImg from '../images/success-image.svg';
import Button from 'react-bootstrap/esm/Button';

const successPage = () => {
  return (
    <Container fluid>
  <Row>
    <Col></Col>
    <Col xs={6} align='center'>
      <div className='success-section'>
        <img
          src={successImg}
          className='success-img'
          alt='Woman jumping with cellphone in the background along a check mark'
          
        />
      </div>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col xs={6} align='center'>
      <div className='success-text'>
        <h1>YOU DID IT!</h1>
        <p>Thank you for taking the Survey! </p>
      </div>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col xs={3} align='center'>
      <div className='success-score-text'>
        <h3>Check your Score!!!</h3>
      </div>
    
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col xs={6} align='center' >
      <Card className='card-points' border='primary' style={{width: '18rem'}}>
        <Card.Body>75/100</Card.Body>
      </Card>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col xs={6} align='center'>
      <div className='tips-text'>
        <h4>Check these tips to improve your score</h4>
      </div>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col>

    <Accordion className='accordion-section'>
      <Card>
        <Card.Header>
          <Accordion.Toggle variant="link"  eventKey="0" style={{ backgroundColor: '#3d9e67', borderColor: '#000000', color:'#ffffff' }}>
            Energy Tips
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0" className='accordion-section'>
          <Card.Body>
            <h6>Switch lights off!</h6>
            <p>When leaving the room turn off the lights and unplug electronic devices when they are not in use.</p>
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <Card.Body><h6>Lower your thermostat in winter and raise it in summer.</h6> 
            <p>Use less air conditioning in the summer; instead opt for fans, which require less electricity. 
              And check out these other ways to beat the heat without air conditioning.</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card >
        <Card.Header>
          <Accordion.Toggle variant="link" eventKey="1" style={{ backgroundColor: '#3d9e67', borderColor: '#000000', color:'#ffffff' }}>
            Water Tips
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
              <h6>Take shorter showers</h6>
              <p>A typical shower uses five to ten gallons of water a minute. Limit your showers to the time it takes to soap up, wash down and rise off.</p>
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <h6>Turn off the water while brushing your teeth</h6>
            <p>Before brushing, wet your brush and fill a glass for rinsing your mouth. </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className='card-section'>
        <Card.Header>
          <Accordion.Toggle variant="link" eventKey="2" style={{ backgroundColor: '#3d9e67', borderColor: '#000000', color:'#ffffff' }}>
            Waste Tips
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <h6>Reduce your food waste</h6>
            <p>Plan your meals ahead of time, freeze the excess and reuse leftovers.</p>
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <h6>Eat low on the food chain</h6>
            <p>This means eating mostly fruits, veggies, grains, and beans. </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
</Accordion>
 
    </Col>
    
  </Row>
 

</Container>














    // <div className='container'>
    //   <div className='row mb-5 mt-5 hero-row-reverse-mobile' align='center'>
    //     <h1 className='display-7 font-weight-bold'>Check your Score!!!</h1>
    //   </div>
    //   <div className='row mb-5 mt-5 hero-row-reverse-mobile'>
    //   <div className='col-lg-6 text-center txt-md-left'>
                        
              
    //       <div className='col-lg-6'>
    //         <div className='hero-img-right'>
    //           <img
    //             src={scoreImg} className='fluid-img' alt='Woman with scores background' />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
      
    
  );
};

export default successPage;
