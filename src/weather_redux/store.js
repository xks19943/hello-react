import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {reducer as weatherReducer} from './weather';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  weather: weatherReducer
});


const middleWares = [thunk];

const storeEnhancers = compose(
  applyMiddleware(...middleWares),
  (window && window.devToolsExtension) ? window.devToolsExtension() : (f)=>f,
);


export default createStore(reducer, {}, storeEnhancers);