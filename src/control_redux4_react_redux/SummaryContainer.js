import React,{Component} from 'react';
import Summary from './Summary';
// import {connect} from 'react-redux';
import {connect} from './my-react-redux';

class SummaryContainer extends Component{
  constructor(props){
    super(props);
    let totalCount = this.getTotalTalCount(props.countValues);
    this.state = {
      totalCount: totalCount
    }
  }

  getTotalTalCount(countValues){
    let totalCount = 0;
    for (const key in countValues){
      if (countValues.hasOwnProperty(key)){
        totalCount += countValues[key];
      }
    }
    return totalCount
  }


  componentWillReceiveProps(nextProps) {
    let totalCount = this.getTotalTalCount(nextProps.countValues);
    this.setState({totalCount: totalCount});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.totalCount !== this.state.totalCount;
  }

  render(){
    return(
      <Summary count={this.state.totalCount}/>
    )
  }
}



function mapStateToProps(state, ownProps) {
  return {
    countValues: state
  }
}



export default connect(mapStateToProps)(SummaryContainer)



