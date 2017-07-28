import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commonReducer from '../features/common/redux/reducer';
import homeReducer from '../features/home/redux/reducer';
import todoReducer from '../features/todo/redux/reducer';
import githubReducer from '../features/github/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage theme.

const reducerMap = {
  router: routerReducer,
  common: commonReducer,
  home: homeReducer,
  todo: todoReducer,
  github: githubReducer,
};

export default combineReducers(reducerMap);
