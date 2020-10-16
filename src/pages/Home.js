import React from 'react';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide mb-5'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              className='active'
            ></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                className='d-block w-100'
                src='https://via.placeholder.com/350x150'
                alt='First slide'
              />
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100'
                src='https://via.placeholder.com/350x150'
                alt='Second slide'
              />
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100'
                src='https://via.placeholder.com/350x150'
                alt='Third slide'
              />
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>

        <div className='row mb-5 hero-row-reverse-mobile'>
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
