import React,{Component} from 'react';
import PropTypes from 'prop-types';
import CounterStore from './CounterStore';
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
    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    };
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  componentDidMount() {
    CounterStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange)
  }

  onClickIncrement(){
    Actions.increment(this.props.caption);
  }


  onClickDecrement(){
    Actions.decrement(this.props.caption);
  }

  onChange(){
    let counterValues = CounterStore.getCounterValues();
    const newCount = counterValues[this.props.caption];
    this.setState({count: newCount})
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