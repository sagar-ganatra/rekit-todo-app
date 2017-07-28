import {
  TODO_UPDATE,
} from './constants';

export function update(todo) {
  return {
    type: TODO_UPDATE,
    payload: todo
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_UPDATE:
      const newTodoList = state.todoList.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });

      const newTodo = {
        ...state,
        todoList: newTodoList
      };

      console.log(newTodo);
      return newTodo;

    default:
      return state;
  }
}
