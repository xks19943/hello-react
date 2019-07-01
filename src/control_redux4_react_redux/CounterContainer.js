import React,{Component} from 'react';
import PropTypes from 'prop-types';
import * as Actions from './Actions';
import Counter from './Counter';
// import {connect} from 'react-redux';
import {connect} from './my-react-redux';

//这是容器型组件
class CounterContainer extends Component {
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
      count: props.count
    }
  }




  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.count
    })
  }


  //决定一个组件什么时候不需要渲染
  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.count !== this.state.count)
  }



  render(){
    const {caption,onIncrement,onDecrement,count} = this.props;
    return(
      <Counter
        caption={caption}
        count={count}
        onClickIncrement={onIncrement}
        onClickDecrement={onDecrement}/>
    )
  }
}


//把Store上的状态转化为内层傻瓜组件的prop
function mapStateToProps(state, ownProps) {
  return {
    count: state[ownProps.caption],
  }
}


//把内层傻瓜组件中的用户动作转化为派送给 Store 的动作
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: ()=>{
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: ()=>{
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}


// connect是 react-redux 提供的一个方法，
// 这个方法接收两个参数 mapStateToProps 和 mapDispatch-ToProps，执行 结果依然是一个函数
// 所以才可以在后面又加一个圆括号，把 connect 函数执行的结果立 刻执行，这一次参数是 Counter这个傻瓜组件

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);