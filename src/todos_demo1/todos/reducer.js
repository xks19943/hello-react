import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './actionTypes';

export default function todo(state=[
  {
    id: 0,
    text: '加油',
    completed: false
  },
  {
    id: 1,
    text: '可爱',
    completed: false
  },
  {
    id: 2,
    text: '嘻嘻哈哈',
    completed: false
  }
], action) {
  switch (action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todoItem)=>{
        if(todoItem.id === action.id){
          return {...todoItem, completed: !todoItem.completed}
        } else {
          return todoItem
        }
      });
    case REMOVE_TODO:
      return state.filter((todoItem)=>{
        return todoItem.id !== action.id
      });
    default:
      return state;
  }
}