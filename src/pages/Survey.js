import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

const Survey = () => {
  return (
    <div>
      <NavBar/>
      <div className='container-fluid survey-page'>
        <div className='row survey-row'>
          <div className='col left-side'>
            <div className='tips-container pt-5 p-3'>
              <div className='tips-container__img mb-4'>
                <img
                  className='d-block w-100'
                  src='https://via.placeholder.com/350x150'
                  alt='placeholder'
                />
              </div>
              <div className='tips-container__tip'>
                <h3 className='tips-container__title'>Did you know?</h3>
                <p className='tips-container__text'>
                  New apparel production releases 4M tons of harmful carbon
                  emissions annually, contributing more than 8% of global
                  greenhouse emissions. The single best thing we can do for the
                  planet is consume less and reuse more.
                </p>
              </div>
            </div>
          </div>
          <div className='col right-side'>
            <div className='question-container'>
              <h2>Find out your effect on the world.</h2>
              <p>
                Do your actions contribute to climate change? Find out with
                Dream in Green footprint calculator.
              </p>
              <button className='btn btn-primary my-2 py-3 px-5'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Survey;
