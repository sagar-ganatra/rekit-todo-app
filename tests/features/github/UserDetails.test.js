import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { UserDetails } from 'src/features/github';

describe('github/UserDetails', () => {
  it('renders node with correct class name', () => {
    const userDetails = {
      login: 'sagar-ganatra',
      name: 'Sagar Ganatra',
      company: 'McKinsey & Company',
      location: 'Bangalore'
    }
    const renderedComponent = shallow(
      <UserDetails data={userDetails}/>
    );

    expect(
      renderedComponent.find('.github-user-details').node
    ).to.exist;
  });
});
