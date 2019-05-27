import React from 'react';
import PropTypes from 'prop-types';


function Summary({count}) {
  return(
    <div>
      <div>{'redux4 total count:' + count}</div>
    </div>
  )
}

Summary.propTypes = {
  count: PropTypes.number.isRequired
};

export default Summary;


