import { expect } from 'chai';

import {
  COMMON_ADD_TO_RECENT_ACTIVITY,
} from 'src/features/common/redux/constants';

import {
  addToRecentActivity,
  reducer,
} from 'src/features/common/redux/addToRecentActivity';

describe('common/redux/addToRecentActivity', () => {
  it('returns correct action by addToRecentActivity', () => {
    expect(addToRecentActivity()).to.have.property('type', COMMON_ADD_TO_RECENT_ACTIVITY);
  });

  it('handles action type COMMON_ADD_TO_RECENT_ACTIVITY correctly', () => {
    const prevState = {
      recentActivity: []
    };
    const state = reducer(
      prevState,
      {
        type: COMMON_ADD_TO_RECENT_ACTIVITY,
        payload: {
          name: 'TODO_ADD',
          payload: 'test'
        }
      }
    );
    console.log(state)
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal({
      recentActivity: [{
        name: 'TODO_ADD',
        payload: 'test'
      }]
    }); // TODO: replace this line with real case.
  });
});
