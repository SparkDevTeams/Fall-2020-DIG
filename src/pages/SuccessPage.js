import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'

import successImg from '../images/success-image.svg';

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
    <Col xs={6} align='center'>
      <div className='success-score-text'>
        <h1>Check Your Score!!!</h1>
      </div>
    </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col xs={6} align='center'>
      <div className='success-points'>
        <h1 className='points'>75/100</h1>
      </div>
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
  <Carousel indicators={false} 
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
  
  > 
        <Carousel.Item>
          <h1> Tip 1</h1>
        </Carousel.Item>
        <Carousel.Item>
          <h1>Tip 2</h1>
        </Carousel.Item>
        <Carousel.Item>
          <h1>Tip 3</h1>
        </Carousel.Item>
      </Carousel>
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
