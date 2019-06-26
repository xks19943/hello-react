import React, {useState,useEffect} from 'react';
import EventEmitter from 'events';
import PropTypes from 'prop-types';

const DeviceEventEmitter = new EventEmitter();



// Hook 需要在我们组件的最顶层调用
//state 对应哪个 useState？答案是 React 靠的是 Hook 调用的顺序
function FriendStatusWithCounter(props) {
  const [isOnline,setIsOnline] = useState(null);
  const [count,setCount] = useState(0);


  //为什么每次更新的时候都要运行 Effect
  // 但是当组件已经显示在屏幕上时，friend prop 发生变化时会发生什么？
  // 我们的组件将继续展示原来的好友状态。这是一个 bug。而且我们还会因为取消订阅时使用错误的好友 ID 导致内存泄露或崩溃的问题
  // 因为 useEffect 默认就会处理。它会在调用一个新的 effect 之前对前一个 effect 进行清理
  // 仅在 props.id 发生变化时，重新订阅
  useEffect(()=>{
    console.log('调用了这个方法','修改订阅的方法');
    function handleStatus(status) {
      setIsOnline(status.isOnline)
    }
    DeviceEventEmitter.addListener(props.id, (status)=>{
      console.log('调用了监听方法');
      handleStatus(status);
    });
    return () => {
      console.log('调用了卸载方法');
      DeviceEventEmitter.removeAllListeners();
    }
  },[props.id]);


  //通过跳过 Effect 进行性能优化
  // 如果默认第二个参数是一个[] effect 内部的 props 和 state 就会一直拥有其初始值 只运行一次的 effect
  // 如果第二个参数是[count]， // 仅在 count 更改时更新
  useEffect(()=>{
    document.title = `你点击了按钮${count}次`;
  },[count]);

  return(
    <div>
      <div>{`${props.id}的状态是${isOnline ? 'Online' : 'Offline'}`}</div>
      <div>你点击了按钮{count}次</div>
      <button onClick={()=>setCount(count+1)}>点击</button>
      <button onClick={()=>{
        DeviceEventEmitter.emit(props.id, {isOnline: !isOnline})
      }}>点击模拟更改user的状态</button>
    </div>
  )
}


FriendStatusWithCounter.propTypes = {
  id: PropTypes.string.isRequired
};



export default FriendStatusWithCounter;