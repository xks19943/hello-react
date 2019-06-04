import React,{Component} from 'react';
import CountDown from './CountDown';



class CountDownDemo extends Component {
  constructor(props){
    super(props);
  }

  showCount(title,count){
    console.log(count);
    return(
      <div>{count > 0 ? count : title}</div>
    )
  };


  render(){
    return(
      <div>
        <CountDown startCount={10}>
          {this.showCount.bind(this,'嘎嘎')}
        </CountDown>
        <CountDown startCount={30}>
          {this.showCount.bind(this,'可爱')}
        </CountDown>
        <CountDown startCount={5}>
          {this.showCount.bind(this,'boom')}
        </CountDown>
      </div>
    )
  }
}

export default CountDownDemo;