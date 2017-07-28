import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ListItem } from 'src/features/todo';

describe('todo/ListItem', () => {
  const todo = {
    id: 1,
    description: 'Hello',
    isCompleted: false
  }
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <ListItem todo={todo} />
    );

    expect(
      renderedComponent.find('.todo-list-item').node
    ).to.exist;
  });
});
