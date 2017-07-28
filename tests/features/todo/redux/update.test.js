import { expect } from 'chai';

import {
  TODO_UPDATE,
} from 'src/features/todo/redux/constants';

import {
  update,
  reducer,
} from 'src/features/todo/redux/update';

describe('todo/redux/update', () => {
  it('returns correct action by update', () => {
    expect(update()).to.have.property('type', TODO_UPDATE);
  });

  it('handles action type TODO_UPDATE correctly', () => {
    const prevState = {
      todoList: [
        {
          id: 1,
          description: 'Todo 1',
          isCompleted: false
        }
      ]
    };
    const state = reducer(
      prevState,
      {
        type: TODO_UPDATE,
        payload: {
          id: 1,
          description: 'Todo 1',
          isCompleted: false
        }
      }
    );

    const completedTodo = {
      todoList: [{
        description: 'Todo 1',
        id: 1,
        isCompleted: true
      }]
    };
    console.log(state);
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(completedTodo); // TODO: replace this line with real case.
  });
});
