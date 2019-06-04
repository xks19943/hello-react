import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter} from "../actions";

const Link = ({active,children,onClick}) => {
  if (active){
    return <b className={'filter selected'}>{children}</b>
  } else {
    return (
      <a href={'#'} className={'filter no-selected'}
        onClick={(event)=>{
          event.preventDefault();
          onClick();
        }}>
        {children}
      </a>
    )
  }
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

function mapStateToProps(state, ownProps) {
  return {
    active: state.filter === ownProps.filter
  }
}

function mapDispatchProps(dispatch,ownProps) {
  return {
    onClick: ()=>{
      dispatch(setFilter(ownProps.filter))
    }
  }
}


export default connect(mapStateToProps,mapDispatchProps)(Link);