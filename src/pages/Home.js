import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer';
import ContactUsForm from '../components/ContactUsForm';

import homeImgFir from '../images/girl-earth.svg';
import homeImgSec from '../images/contact-us-image.svg';

const Home = () => {
  return (
    <div>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://via.placeholder.com/350x150'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://via.placeholder.com/350x150'
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://via.placeholder.com/350x150'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
      <div className='container'>
        <div className='row mb-5 mt-5 hero-row-reverse-mobile'>
          <div className='col-lg-6 text-center txt-md-left'>
            <div className='row mb-5'>
              <h1 className='display-4 font-weight-bold'>
                Monitor your greenhouse emissions
              </h1>
            </div>
            <p className='lead'>
              Dream in Green teamed up with SparkDev and Microsoft to build this
              easy to use application so that kids from all over the world can
              learn about their impact on the environment and how to create a
              better world.
            </p>
            <button
              type='button'
              className='btn btn-primary my-2 my-lg-0 py-3 px-5'
            >
              Get Started
            </button>
          </div>
          <div className='col-lg-6'>
            <div className='hero-img-right'>
              <img
                src={homeImgFir}
                className='fluid-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
        </div>
        <div>
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
