import React from 'react';

export const buildAnswers = (question, itemIndex, score, setScore) => {
  const { ans, type } = question;
  if (type === 'multipleChoice') {
    return ans.map((answer, i) => {
      return (
        <button
          key={i}
          onClick={() => setScore({ ...score, [itemIndex]: answer.value })}
        >
          {answer.ans}
        </button>
      );
    });
  } else if (type === 'slider') {
    return (
      <button onClick={() => setScore({ ...score, [itemIndex]: 2 })}>
        Slider!
      </button>
    );
  }
};
