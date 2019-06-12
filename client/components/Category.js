import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue';

const Category = props => {
  return (
    <div className={'category'} data-testid="category">
      <div>
        {props.category.title}
      </div>
      {/* display category */}
      {/* display clues for each category */}
      {props.category.clues.map((clue) =>
      <div >
        <Clue 
          selected={props.currentQuestion.id === clue.id}
          selectQuestion={props.selectQuestion}
          answered={props.answeredQuestions.indexOf(clue) > -1}
          clueObject={clue}
        />
      </div>
        )}

    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
