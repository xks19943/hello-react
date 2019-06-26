import React, {Component} from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import FriendStatusWithCounter from './FriendStatusWithCounter';
import FriendStatus from './FriendStatus';
import FriendListItem from './FriendListItem';



//Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
class HookExample extends Component{

  render(){
    const friendList = [
      { id: 1, name: 'Phoebe'},
      { id: 2, name: 'Rachel'},
      { id: 3, name: 'Ross'},
    ];
    const FriendList = friendList.map((friend)=>(
      <FriendListItem
        key={friend.id}
        id={friend.id}
        name={friend.name}/>
    ));
    return(
      <div>
        <Example1/>
        <Example2/>
        <FriendStatusWithCounter id={'123456'}/>
        {FriendList}
        <FriendStatus/>
      </div>
    )
  }
}

export default HookExample;