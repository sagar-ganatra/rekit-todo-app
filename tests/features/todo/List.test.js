import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { List } from 'src/features/todo/List';

describe('todo/List', () => {
  it('renders node with correct class name', () => {
    const props = {
      todo: {
        todoList: [{
          id: 1,
          isCompleted: false,
          description: 'Todo 1'
        }, {
          id: 2,
          isCompleted: true,
          description: 'Todo 2'
        }]
      },
      actions: {},
    };
    const renderedComponent = shallow(
      <List {...props} />
    );

    expect(
      renderedComponent.find('.todo-list').node
    ).to.exist;
  });
});
