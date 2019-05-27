import React,{Component} from 'react';
import Summary from './Summary';
import PropTypes from "prop-types";

class SummaryContainer extends Component{

  static contextTypes = {
    store: PropTypes.object,
  };

  constructor(){
    super(...arguments);
    this.state = this.getOwnState();
    this.updateTotalCount = this.updateTotalCount.bind(this);
  }

  componentDidMount() {
    this.context.store.subscribe(this.updateTotalCount);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.updateTotalCount);
  }


  getOwnState(){
    let countValues = this.context.store.getState();
    let totalCount = 0;
    for (const key in countValues){
      if (countValues.hasOwnProperty(key)){
        totalCount += countValues[key];
      }
    }
    return {
      totalCount: totalCount
    }
  }

  updateTotalCount(){
    let ownState = this.getOwnState();
    this.setState(ownState);
  }


  render(){
    return(
      <Summary count={this.state.totalCount}/>
    )
  }
}


export default SummaryContainer;


