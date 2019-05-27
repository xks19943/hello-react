import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Store from './Store';
import * as Actions from './Actions';

class Counter extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
  };


  /**
   * 这是装载过程 componentDidMount并不会在render后马上调用 而是在都render完之后调用
   * @param props
   */

  constructor(props){
    super(props);
    this.state = this.getOwnerState();
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
  }




  componentDidMount() {
    Store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    Store.unsubscribe(this.onChange)
  }

  getOwnerState(){
    return {
      count: Store.getState()[this.props.caption]
    }
  }

  onClickIncrement(){
    Store.dispatch(Actions.increment(this.props.caption));
  }


  onClickDecrement(){
    Store.dispatch(Actions.decrement(this.props.caption));
  }

  onChange(){
    let ownerState = this.getOwnerState();
    this.setState(ownerState);
  }


  //决定一个组件什么时候不需要渲染
  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.count !== this.state.count)
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