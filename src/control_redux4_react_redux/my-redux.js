
//这是一个迷你的redux 理解redux的原理
export function createStore(reducer,initState){
  let currentState = initState || {};
  let currentListeners = [];

  //获取当前的状态
  function getState() {
    return currentState;
  }

  //注册监听器
  function subscribe(listener) {
    currentListeners.push(listener);
  }

  //传递动作的时候触发监听器
  function dispatch(action) {
    console.log(action,'---');
    currentState = reducer(currentState,action);
    currentListeners.forEach(v=>v());
    return action
  }

  //如果不存在初始化状态的时候调用一个初始化动作返回个初始化状态
  if(!initState){
    dispatch({type: '@INIT/MY_REUDX'});
  }

  return {getState, dispatch, subscribe}
}
