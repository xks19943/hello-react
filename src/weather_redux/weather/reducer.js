import * as Status from './status';
import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from './actionTypes';

export default (state = {status: Status.LOADING}, action) =>{
  switch (action.type){
    case FETCH_STARTED:
      return {status: Status.LOADING};
    case FETCH_FAILURE:
      return {...state,status: Status.FAILURE};
    case FETCH_SUCCESS:
      return {...state,status: Status.SUCCESS, ...action.result};
    default:
      return state;
  }
};