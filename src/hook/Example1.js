import React,{useState} from 'react';

function Example1() {
  //useState 唯一的参数就是初始state count的初始值是0

  //调用 useState 方法的时候做了什么? 它定义一个 “state 变量”
  //useState 需要哪些参数？ useState() 方法里面唯一的参数就是初始 state
  //useState 方法的返回值是什么？ 返回值为：当前 state 以及更新 state 的函数
  const [count,setCount] = useState(0);
  return(
    <div>
      <div>你点击了按钮{count}次</div>
      <button
        onClick={()=>setCount(count+1)}>点击</button>
    </div>
  )
}

export default Example1;