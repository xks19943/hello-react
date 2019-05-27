import React,{Component} from 'react';
import SummaryStore from './SummaryStore';

class Summary extends Component{
  constructor(props){
    super(props);
    this.state = {
      totalCount: SummaryStore.getSummary()
    }
    this.updateTotalCount = this.updateTotalCount.bind(this);
  }

  componentDidMount() {
    SummaryStore.addChangeListener(this.updateTotalCount)
  }

  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.updateTotalCount)
  }

  updateTotalCount(){
    let newTotalCount = SummaryStore.getSummary();
    this.setState({
      totalCount: newTotalCount
    });
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


