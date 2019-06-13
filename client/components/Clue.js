import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  let result;
  if (props.selected){
      result = props.clueObject.question;
    }else if(props.answered){
      result = <div id="box"></div>;
    }else{
      result = props.clueObject.value;
    }

    return(
      <div class="clueValue" onClick={() => props.selectQuestion(props.clueObject)}>{result}</div>
      
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  )
  
};


Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
