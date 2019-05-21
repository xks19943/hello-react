import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number.isRequired,
    onUpdate: PropTypes.func,
  };

  static defaultProps = {
    initValue: 0,
    onUpdate: f => f
  };


  /**
   * 这是装载过程 componentDidMount并不会在render后马上调用 而是在都render完之后调用
   * @param props
   */

  constructor(props){
    super(props);
    this.state = {
      count: props.initValue
    };
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
  }

  componentWillMount() {
    console.log('enter componentWillMount ' + this.props.caption);
  }

  componentDidMount() {
    console.log('enter componentDidMount ' + this.props.caption);
  }

  onClickIncrement(){
    this.updateCount(true);
  }


  onClickDecrement(){
    this.updateCount(false);
  }


  updateCount(isIncrement){
    let previousValue = this.state.count;
    let newValue = isIncrement ? previousValue + 1 :  previousValue - 1;
    this.setState({count: newValue});
    this.props.onUpdate(previousValue, newValue);
  }


  /**
   * 这是更新过程
   * @param nextProps
   */

  //当父组件的render被调用的时候都会调用这个方法
  componentWillReceiveProps(nextProps) {
    console.log('enter componentWillReceiveProps ' + this.props.caption);
  }


  //决定一个组件什么时候不需要渲染
  shouldComponentUpdate(nextProps, nextState) {
    console.log('enter shouldComponentUpdate ');
    return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
  }


  componentWillUpdate(){
    console.log('enter componentWillUpdate '  + this.props.caption);
  }

  componentDidUpdate() {
    console.log('enter componentDidUpdate '  + this.props.caption);
  }

  componentWillUnmount() {
    console.log('enter componentWillUnmount '  + this.props.caption);
  }

  render(){
    const {caption} = this.props;
    console.log('enter render ' + caption);
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