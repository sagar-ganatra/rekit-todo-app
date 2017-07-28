import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/github/DefaultPage';

describe('github/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      github: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.github-default-page').node
    ).to.exist;
  });
});
