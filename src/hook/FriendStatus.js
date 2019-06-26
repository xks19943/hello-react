import React from 'react';
import useFriendStatus from './useFriendStatus';

function FriendStatus(props) {

  //使用的自定义hooks
  const isOnline = useFriendStatus(props.id);
  if (isOnline == null){
    return (
      <div>loading</div>
    )
  }
  return (
    <div>{isOnline ? 'Online' : 'Offline'}</div>
  )
}


export default FriendStatus;
