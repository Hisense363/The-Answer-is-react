import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Response = props => {
  const keyPress = function (e){
    if(e.keyCode === 13){
      props.submitResponse(e);
    }
  }
  return (
    <div id={'response'} data-testid="response">
      <input
        type='text'
        placeholder='Answers go here!'
        // handle data change
        // handle when 'enter' is hit
        onKeyDown={keyPress}
      >
      </input>
    </div>
  )
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}
export default Response;