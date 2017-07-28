import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Add } from 'src/features/todo/Add';

describe('todo/Add', () => {
  it('renders node with correct class name', () => {
    const props = {
      todo: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Add {...props} />
    );

    expect(
      renderedComponent.find('.todo-add').node
    ).to.exist;
  });
});
