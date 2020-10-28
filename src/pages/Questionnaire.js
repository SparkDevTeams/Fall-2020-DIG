import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Questionnaire = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className='container-fluid'>
        <div className='row questionnaire-row'>
          <div className='col-lg-6 questionnaire-left'></div>
          <div className='col-lg-6 px-md-5 questionnaire-right'>
            <h2 className='questionnaire-step-counter'>
              Question {index + 1} of 15
            </h2>
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
                <h1>First slide</h1>
              </Carousel.Item>
              <Carousel.Item>
                <h1>second slide</h1>
              </Carousel.Item>
              <Carousel.Item>
                <h1>third slide</h1>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
