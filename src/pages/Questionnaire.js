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
      <div className='container-fluid'>
        <div className='row questionnaire-row'>
          <div className='col-lg-6 questionnaire-left'></div>
          <div className='col-lg-6 questionnaire-right'>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              nextIcon={<Button variant='primary'>Next</Button>}
              prevIcon={<Button variant='primary'>Back</Button>}
              bsPrefix='c-carousel'
              wrap={false}
              indicators={true}
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
