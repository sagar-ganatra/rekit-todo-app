import { expect } from 'chai';

import {
  TODO_ADD,
} from 'src/features/todo/redux/constants';

import {
  add,
  reducer,
} from 'src/features/todo/redux/add';

describe('todo/redux/add', () => {
  it('returns correct action by add', () => {
    expect(add()).to.have.property('type', TODO_ADD);
  });

  it('handles action type TODO_ADD correctly', () => {
    const prevState = {
      todoList: []
    };
    const state = reducer(
      prevState,
      { type: TODO_ADD, payload: 'test' }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal({todoList: [{
      id: 1,
      description: 'test',
      isCompleted: false
    }]}); // TODO: replace this line with real case.
  });
});
