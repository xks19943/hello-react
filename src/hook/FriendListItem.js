import React from 'react';
import useFriendStatus from './useFriendStatus';
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.id);
  return (
    <li style={{color: isOnline ? 'green' : 'black'}}>
      {props.name}
    </li>
  )
}

export default FriendListItem;