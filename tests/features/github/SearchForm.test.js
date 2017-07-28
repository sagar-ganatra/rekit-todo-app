import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SearchForm } from 'src/features/github';

describe('github/SearchForm', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <SearchForm />
    );

    expect(
      renderedComponent.find('.github-search-form').node
    ).to.exist;
  });
});
