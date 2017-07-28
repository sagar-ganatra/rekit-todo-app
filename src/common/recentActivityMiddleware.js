const recentActivity = store => next => action => {
  if (action.type.indexOf('@@') !== 0) {
    console.log(action.type);
    next({
      type: 'COMMON_ADD_TO_RECENT_ACTIVITY',
      payload: {
        name: action.type,
        payload: typeof action.payload === 'object' ? JSON.stringify(action.payload) : action.payload
      }
    });
  }
  return next(action);
}

export default recentActivity;
