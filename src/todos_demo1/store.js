import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {reducer as filterReducer} from './filter';
import {reducer as todoReducer} from './todos';



const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});


const middlewares = [];
if (process.env.NODE_ENV !== 'production'){
  // import语句不能够存在于条件语句之中，只能 出现在模块语句的顶层位置
  middlewares.push(require('redux-immutable-state-invariant').default());
}


// Store Enhancer 的意思，能够让 createStore 函数产生的 Store 对象具有更多更强的功能
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (window && window.devToolsExtension) ? window.devToolsExtension() : (f)=>f,
);

export default createStore(reducer, {}, storeEnhancers);
