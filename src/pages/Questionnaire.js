import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import questions from '../assets/questions';

const Questionnaire = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const buildAnswers = ({ ans, type }) => {
    if (type === 'multipleChoice') {
      return ans.map((answer, i) => {
        return (
          <button key={i} value={answer.value}>
            {answer.ans}
          </button>
        );
      });
    } else if (type === 'slider') {
      return <h1>Slider!</h1>;
    }
  };

  const htmlOfItems = questions.map((question, i) => {
    return (
      <Carousel.Item key={i}>
        <h2>{question.ques}</h2>
        {buildAnswers(question)}
      </Carousel.Item>
    );
  });

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
              nextIcon={<div className='py-3 px-5 btn btn-primary'>Next</div>}
              prevIcon={<div className='py-3 px-5 btn btn-primary'>Back</div>}
              bsPrefix='c-carousel'
              wrap={false}
              indicators={true}
            >
              {htmlOfItems}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
