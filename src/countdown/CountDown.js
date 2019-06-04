import {Component} from 'react';
import PropTypes  from 'prop-types';

class CountDown extends Component{
  constructor(){
    super(...arguments);
    this.state = {
      count: this.props.startCount
    }
  }


  componentDidMount() {
    this.intervalHandler = setInterval(()=>{
      const newCount = this.state.count - 1;
      if (newCount >= 0){
        this.setState({count: newCount})
      }else {
        clearInterval(this.intervalHandler);
      }
    },1000);
  }

  componentWillUnmount() {
    this.intervalHandler && clearInterval(this.intervalHandler);
  }

  render(){
    return this.props.children(this.state.count);
  }


  //状态不相同的时候才更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.count, '---' + this.state.count);
    return nextState.count !== this.state.count;
  }
}

CountDown.propTypes = {
  startCount: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired
};

export default CountDown;