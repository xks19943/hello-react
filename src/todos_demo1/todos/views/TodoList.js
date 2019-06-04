import React from 'react';
import TodoItem from './TodoItem';
import {connect} from 'react-redux';
import {FilterTypes} from "../../constants";
// import {toggleTodo, removeTodo} from '../actions';
// import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';


const TodoList = ({todos,onToggleTodo,onRemoveTodo})=>{
  return(
    <ul className={'todo-list'}>
      {
        todos.map((item) => {
          return(
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}/>
          )
        })
      }
    </ul>
  )
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};


/*
function selectVisibleTodos(todos,filter){
  switch (filter){
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => item.completed);
    default:
      throw new Error('unsupported filter');
  }
}


const mapStateToProps = (state) => {
  console.log(state,'state');
  return {
    todos: selectVisibleTodos(state.todos,state.filter)
  }
};


*/


const getVisibleFilter = (state)=> state.filter;
const getTodos = (state)=> state.todos;

export const selectVisibleTodos = createSelector(
  [getTodos,getVisibleFilter],
  (todos,filter)=>{
    switch (filter){
      case FilterTypes.ALL:
        return todos;
      case FilterTypes.COMPLETED:
        return todos.filter(item => item.completed);
      case FilterTypes.UNCOMPLETED:
        return todos.filter(item => item.completed);
      default:
        throw new Error('unsupported filter');
    }
  }
);


const mapStateToProps = (state) => {
  console.log(state,'state');
  return {
    todos: selectVisibleTodos(state)
  }
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id)=>{
      dispatch(toggleTodo(id))
    },
    onRemoveTodo: (id)=>{
      dispatch(removeTodo(id))
    }
  }
};*/

//action构造函数和prop关联起来
/*const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
},dispatch);*/

export default connect(mapStateToProps,null)(TodoList);