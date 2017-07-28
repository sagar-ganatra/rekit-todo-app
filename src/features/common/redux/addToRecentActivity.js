import {
  COMMON_ADD_TO_RECENT_ACTIVITY,
} from './constants';

export function addToRecentActivity() {
  return {
    type: COMMON_ADD_TO_RECENT_ACTIVITY,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_ADD_TO_RECENT_ACTIVITY:
      console.log('state', state);
      const recentActivity = state.recentActivity;
      return {
        ...state,
        recentActivity: [...recentActivity, action.payload]
      };

    default:
      return state;
  }
}
