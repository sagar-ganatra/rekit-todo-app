import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/todo/DefaultPage';

describe('todo/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      todo: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.todo-default-page').node
    ).to.exist;
  });
});
