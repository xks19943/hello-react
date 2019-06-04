import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../actions";


class AddTodo extends Component{

  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }


  onSubmit(event) {
    event.preventDefault(); //取消表单的默认行为
    // const input = this.input;
    // if (!input.value.trim()) {
    //   return;
    // }
    // this.props.onAdd(input.value);
    // input.value = "";

    const value = this.state.value;
    if (!value.trim()){
      return;
    }
    this.props.onAdd(value);
    this.setState({
      value: ''
    });
  }



  refInput(node){
    this.input = node;
  }

  inputChange(event){
    this.setState({
      value: event.target.value
    })
  }

  render(){
    return(
      <div className={'add-todo'}>
        <form onSubmit={this.onSubmit}>
          <input
            className={'new-todo'}
                 //ref={this.refInput}
            onChange={this.inputChange}
            value={this.state.value}/>
          <button className={'add-btn'} type={'submit'}>
            添加
          </button>
        </form>
      </div>
    )
  }
}


function mapDispatchProps(dispatch) {
  return {
    onAdd: (value)=>{
      dispatch(addTodo(value))
    }
  }
}

export default connect(null,mapDispatchProps)(AddTodo);