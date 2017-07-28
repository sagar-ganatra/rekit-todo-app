import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { RecentActivity } from 'src/features/common/RecentActivity';

describe('common/RecentActivity', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {
        recentActivity: [{
          name: 'TODO_ADD',
          payload: 'test'
        }]
      },
      actions: {},
    };
    const renderedComponent = shallow(
      <RecentActivity {...props} />
    );

    expect(
      renderedComponent.find('.common-recent-activity').node
    ).to.exist;
  });
});
