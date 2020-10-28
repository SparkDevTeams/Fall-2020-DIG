import React from 'react';

import scoreImg from '../images/score-points-image.svg';

const points = () => {
  return (
    <div className='container'>
      <div className='row mb-5 mt-5 hero-row-reverse-mobile' align='center'>
        <h1 className='display-7 font-weight-bold'>Check your Score!!!</h1>
      </div>
      <div className='row mb-5 mt-5 hero-row-reverse-mobile'>
      <div className='col-lg-6 text-center txt-md-left'>
                        
              
          <div className='col-lg-6'>
            <div className='hero-img-right'>
              <img
                src={scoreImg} className='fluid-img' alt='Woman with scores background' />
            </div>
          </div>
        </div>
      </div>
    </div>
      
    
  );
};

export default points;
