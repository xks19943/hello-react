import React,{useState,useEffect} from 'react';

function Example2() {
  //useState 唯一的参数就是初始state count的初始值是0
  const [count,setCount] = useState(0);


  // 相当于 componentDidMount 和 componentDidUpdate:
  // useEffect 做了什么？ 通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作
  // 为什么在组件内部调用 useEffect？
  // 将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props)
  // useEffect 会在每次渲染后都执行吗？ 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行
  useEffect(()=>{
    document.title = `你点击了按钮${count}次`;
  });

  return(
    <div>
      <div>你点击了按钮{count}次</div>
      <button
        onClick={()=>setCount(count+1)}>点击</button>
    </div>
  )
}

export default Example2;