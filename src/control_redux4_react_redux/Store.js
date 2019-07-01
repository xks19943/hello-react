//import {createStore} from 'redux';
import {createStore} from "./my-redux";
import Reducer from './Reducer';

const initState = {
  'First': 0,
  'Second': 10,
  'Third': 20,
};

const store = createStore(Reducer,initState);
export default store;