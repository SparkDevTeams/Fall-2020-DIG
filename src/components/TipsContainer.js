import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import questions from '../assets/questions'; // this is for testing, it'll change to tips later
import homeImgFir from '../images/girl-earth.svg'; // this is for testing, it'll be deleted later

const TipsContainer = (props) => {
  const htmlOfItems = questions.map((question, i) => {
    return (
      <Carousel.Item key={i}>
        <div className='tips-image'>
          <img src={homeImgFir} alt='' />
        </div>
        <div className='tips-copy'>
          <h2 className='tips-copy__title'>Did you know?</h2>
          <p className='tips-copy__tip'>This is slide {i}</p>
        </div>
      </Carousel.Item>
    );
  });

  return (
    <React.Fragment>
      <Carousel
        activeIndex={props.index}
        controls={false}
        fade={true}
        interval={null}
        indicators={false}
        touch={false}
        style={{ height: 100 + '%' }}
      >
        {htmlOfItems}
      </Carousel>
    </React.Fragment>
  );
};

export default TipsContainer;
