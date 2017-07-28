import {
  TODO_ADD,
} from './constants';

export function add(payload) {
  return {
    type: TODO_ADD,
    payload
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_ADD:
      const todoList = state.todoList;
      const newTodo = {
        id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
        isCompleted: false,
        description: action.payload
      };
      return {
        ...state,
        todoList: [...state.todoList, newTodo]
      };

    default:
      return state;
  }
}
