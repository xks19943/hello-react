import React from 'react';
import './style.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';



export default function ToDo() {
  return(
    <div className={'todos'}>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}




