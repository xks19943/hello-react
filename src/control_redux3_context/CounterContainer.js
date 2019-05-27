import React,{Component} from 'react';
import PropTypes from 'prop-types';
import * as Actions from './Actions';
import Counter from './Counter';

//这是容器型组件
class CounterContainer extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
  };


  static contextTypes = {
    store: PropTypes.object,
  };




  /**
   * 这是装载过程 componentDidMount并不会在render后马上调用 而是在都render完之后调用
   * @param props
   *
   * 一定要带上 context参数，这样才能让 React组件初始化实例
   中的 context，不然组件的其他部分就无法使用 this.context
   */


  constructor(){
    console.log(...arguments);
    super(...arguments);
    this.state = this.getOwnerState();
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
  }




  componentDidMount() {
    this.context.store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange)
  }

  getOwnerState(){
    return {
      count: this.context.store.getState()[this.props.caption]
    }
  }

  onClickIncrement(){
    this.context.store.dispatch(Actions.increment(this.props.caption));
  }


  onClickDecrement(){
    this.context.store.dispatch(Actions.decrement(this.props.caption));
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
      <Counter
        caption={caption}
        count={this.state.count}
        onClickIncrement={this.onClickIncrement}
        onClickDecrement={this.onClickDecrement}/>
    )
  }
}


export default CounterContainer;