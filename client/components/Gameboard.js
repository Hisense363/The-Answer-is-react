import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';

const Gameboard = props => {
  let result;
  if(props.currentQuestion.question){
    result = props.currentQuestion.question;
  }else{
    result = <Categories
    categories={props.categories}
    selectQuestion={props.selectQuestion}
    currentQuestion={props.currentQuestion}
    answeredQuestions={props.answeredQuestions}
    />;
  }

  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
      {result}
    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
