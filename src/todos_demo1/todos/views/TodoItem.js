import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions';
import PropTypes from 'prop-types';

/*const TodoItem = ({onToggle, onRemove, completed, text}) => (
  <li
    className={'todo-item'}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    <input
      className={'toggle'}
      type={'checkbox'}
      checked={completed ? {checked: true} : {}}
      readOnly={true}
      onClick={()=>{
        console.log('onToggle');
        onToggle();
      }}/>
    <label className={'text'}>{text}</label>
    <button className={'remove'} onClick={onRemove}>X</button>
  </li>
);*/

class TodoItem extends Component{

  constructor(props){
    super(props);
    console.log('调用了constructor方法',props.text);
  }
  render(){
    const {onToggle, onRemove, completed, text} = this.props;
    console.log('调用了render方法',text);
    return(
      <li
        className={'todo-item'}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}>
        <input
          className={'toggle'}
          type={'checkbox'}
          checked={completed ? {checked: true} : {}}
          readOnly={true}
          onClick={()=>{
            console.log('onToggle');
            onToggle();
          }}/>
        <label className={'text'}>{text}</label>
        <button className={'remove'} onClick={onRemove}>X</button>
      </li>
    )
  }
}

TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};



//它认为两个 prop 是相同的，就必须让这这两个 prop 指向同样 一个函数，
// 如果每次传给 prop 的都是一个新创建的函数，那肯 定就没法让 prop 指向同 一个函数了

function mapDispatchProps(dispatch, ownProps) {
  let {id} = ownProps;
  return {
    onToggle: ()=>{
      dispatch(toggleTodo(id));
    },
    onRemove: ()=>{
      dispatch(removeTodo(id));
    }
  }
}




export default connect(null,mapDispatchProps)(TodoItem);