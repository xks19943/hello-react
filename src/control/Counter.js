import React,{Component} from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: props.initValue
    };
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
  }


  onClickIncrement(){
    this.setState({
      count: this.state.count + 1
    });
  }


  onClickDecrement(){
    this.setState({
      count: this.state.count - 1
    });
  }




  render(){
    const {caption} = this.props;
    return(
      <div>
        <button onClick={this.onClickDecrement}>-</button>
        <span>{caption}count:{this.state.count}</span>
        <button onClick={this.onClickIncrement}>+</button>
      </div>
    )
  }
}

export default Counter;