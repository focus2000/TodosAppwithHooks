import React from 'react';
import { v4 as uuid } from 'uuid';


const todosReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.todos


    case 'ADD_TODO':
      return [
        ...state,
        { title: action.title, id: uuid() }
      ]


    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id)


    default:
      return state

  }
}

export { todosReducer as default }