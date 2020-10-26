import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Questionnaire = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    console.log(selectedIndex);
  };

  return (
    <div>
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
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              nextIcon={<Button variant='primary'>Next</Button>}
              prevIcon={<Button variant='primary'>Back</Button>}
              bsPrefix='c-carousel'
            >
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='holder.js/800x400?text=First slide&bg=373940'
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='holder.js/800x400?text=Second slide&bg=282c34'
                  alt='Second slide'
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='holder.js/800x400?text=Third slide&bg=20232a'
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
