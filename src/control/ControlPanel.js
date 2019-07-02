import React,{Component} from 'react';
import Counter from './Counter';

class ControlPanel extends Component{

  constructor(props) {
    super(props);
    this.initValues = [0,10,20];
    const initSum = this.initValues.reduce((a, b)=> a + b, 0);
    this.state = {
      sum: initSum
    };
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
  }

  componentWillMount() {
    console.log('enter componentWillMount ControlPanel');
  }


  componentDidMount() {
    console.log('enter componentDidMount ControlPanel');
  }

  componentWillReceiveProps(nextProps) {
    console.log('enter componentWillReceiveProps ControlPanel');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('enter shouldComponentUpdate ControlPanel');
    return nextState.sum !== this.state.sum;
  }

  componentWillUpdate() {
    console.log('enter componentWillUpdate ControlPanel');
  }

  componentDidUpdate() {
    console.log('enter componentDidUpdate ControlPanel');
  }

  componentWillUnmount() {
    console.log('enter componentWillUnmount ControlPanel');
  }


  onCounterUpdate(newValue,previousValue){
    const value = newValue - previousValue;
    this.setState({
      sum: this.state.sum + value
    })
  }


  render(){
    console.log('Enter ControlPanel render');
    return(
      <div>
        <Counter caption={'First'} initValue={this.initValues[0]} onUpdate={this.onCounterUpdate}/>
        <Counter caption={'Second'} initValue={this.initValues[1]} onUpdate={this.onCounterUpdate}/>
        <Counter caption={'Third'} initValue={this.initValues[2]} onUpdate={this.onCounterUpdate}/>
        <button onClick={()=>this.forceUpdate()}>
          Click me to repaint!
        </button>
        <div>Total Count: {this.state.sum}</div>
      </div>
    )
  }
}

export default ControlPanel;