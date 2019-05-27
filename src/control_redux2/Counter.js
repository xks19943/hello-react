import React from 'react';
import PropTypes from 'prop-types';


function Counter({caption,count,onClickDecrement,onClickIncrement}) {
  return(
    <div>
      <button onClick={onClickDecrement}>-</button>
      <span>{caption}count:{count}</span>
      <button onClick={onClickIncrement}>+</button>
    </div>
  )
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClickDecrement: PropTypes.func,
  onClickIncrement: PropTypes.func
};

export default Counter;