import React from 'react';
import TodoItem from './TodoItem';
import {connect} from 'react-redux';
import {FilterTypes} from "../../constants";
// import {toggleTodo, removeTodo} from '../actions';
// import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import {spring,TransitionMotion} from 'react-motion';
//import TransitionGroup from 'react-addons-css-transition-group';
//import './todoItem.css';


/*
//这是使用ReactCSSTransitionGroup来实现动画
// TransitionGroup 应该直接包含需要动画效果的子组件，子组件可以是一组
const TodoList = ({todos,onToggleTodo,onRemoveTodo})=>{
  return(
    <ul className={'todo-list'}>
      <TransitionGroup
        transitionName={'fade'}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={200}
        transitionAppearTimeout={1000}
        transitionAppear={true}>
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
      </TransitionGroup>
    </ul>
  )
};
*/



//这是动画的目标状态
const getStyles = (todos)=>{
  return todos.map(item => ({
    key: item.id.toString(),
    data: item,
    style: {
      height: spring(60),
      opacity: spring(1)
    }
  }));
};


//这是动画的初始化状态
const willEnter = () => {
  return {
    height: 0,
    opacity: 0
  }
};

//这是动画的结束状态
const willLeave = () => {
  return {
    height: spring(0),
    opacity: spring(0)
  }
};

//这是使用react-motion动画库来实现动画 TransitionMotion 只能包含 函数作为子组件，而且这个函数只能返回一个元素，不能是一个数组作为元素
const TodoList = ({todos,onToggleTodo,onRemoveTodo})=>{

  const styles = getStyles(todos);
  return(
    <TransitionMotion styles={styles} willEnter={willEnter} willLeave={willLeave}>
        {
          interpolatedStyles =>
            <ul className={'todo-list'}>
              {
                interpolatedStyles.map((config) => {
                  const {key, data, style} = config;
                  const item = data;
                  return(
                    <TodoItem
                      style={style}
                      key={key}
                      id={item.id}
                      text={item.text}
                      completed={item.completed}/>
                  )
                })
              }
            </ul>
        }
    </TransitionMotion>
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