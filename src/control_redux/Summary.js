import React,{Component} from 'react';
import Store from './Store';

class Summary extends Component{
  constructor(props){
    super(props);
    this.state = this.getOwnState();
    this.updateTotalCount = this.updateTotalCount.bind(this);
  }

  componentDidMount() {
    Store.subscribe(this.updateTotalCount);
  }

  componentWillUnmount() {
    Store.unsubscribe(this.updateTotalCount);
  }


  getOwnState(){
    let countValues = Store.getState();
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
      <div>
        <div>{'total count:' + this.state.totalCount}</div>
      </div>
    )
  }
}


export default Summary;


