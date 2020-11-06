import React from 'react';
import Slider from 'rc-slider';

export const buildAnswers = (question, questionIndex, score, setScore) => {
  const { ans, type } = question;
  if (type === 'multipleChoice') {
    return ans.map((answer, i) => {
      return (
        <button
          key={i}
          onClick={() => setScore({ ...score, [questionIndex]: answer.value })}
          className={`multipleChoice-btn ${
            score[questionIndex] === answer.value ? 'active' : ''
          }`}
        >
          {answer.ans}
        </button>
      );
    });
  } else if (type === 'slider') {
    return (
      <div className='slider-wrapper'>
        <Slider
          min={0}
          max={10}
          onChange={(e) => setScore({ ...score, [questionIndex]: e })}
          handleStyle={{ backGround: 'red' }}
        />
      </div>
    );
  }
};
