import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div>
      <NavBar />
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
              Dream in Green teamed up with Sparkdev and Microsoft to build this
              easy to use application so that kids all over the word can keep
              track of their emissions and learn to be better citizens.
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
                src='./images/girl-earth.svg'
                className='fluid-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
        </div>

        <div className='row mb-5'>
          <div className='col-lg-6'>
            <div className='hero-img-left'>
              <img
                src='images/contact-us-image.svg'
                className='fluid-img'
                alt='Woman holding envelope'
              />
            </div>
          </div>
          <div className='contact-us col-lg-6 text-center txt-md-left'>
            <h1 className='display-4 font-weight-bold mb-3'>Contact Us</h1>
            <form className='contact-form'>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>
                  Name
                </label>
                <input type='text' className='col-sm-9 form-control' />
              </div>
              <div className='form-group row'>
                <label htmlFor='email' className='col-sm-2 col-form-label'>
                  Email
                </label>
                <input type='text' className='col-sm-9 form-control' />
              </div>
              <div className='form-group row'>
                <label htmlFor='message' className='col-sm-2 col-form-label'>
                  Message
                </label>
                <textarea className='col-sm-9 form-control' rows='3' />
              </div>
              <div className='form-group row'>
                <label
                  htmlFor='button-offset'
                  className='col-sm-2 col-form-label font-weight-bold'
                ></label>
                <div className='col-sm-9'>
                  <button
                    type='button'
                    className='btn btn-primary my-2 my-lg-0 py-1 px-5'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
