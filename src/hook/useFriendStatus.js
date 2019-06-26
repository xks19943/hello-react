import React,{useState,useEffect} from 'react';
import EventEmitter from "events";
const DeviceEventEmitter = new EventEmitter();


//这是自定义的hook
function useFriendState(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(()=>{
    function handleChange(isOnline) {
      setIsOnline(isOnline)
    }

    DeviceEventEmitter.addListener(friendID,handleChange);

    return ()=>{
      DeviceEventEmitter.removeAllListeners();
    }
  });

  return isOnline
}

export default useFriendState;