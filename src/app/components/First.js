import React from 'react';
import PropTypes from 'prop-types';

const First = ({ counter, incrementClick, decrementClick }) => {
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={decrementClick}>decrement</button>
      <button onClick={incrementClick}>increment</button>
    </div>
  )
};

First.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementClick: PropTypes.func.isRequired,
  decrementClick: PropTypes.func.isRequired
};

export default First;