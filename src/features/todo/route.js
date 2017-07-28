import {
  List,
  Add
} from './';

export default {
  path: 'todo',
  name: 'Todo',
  childRoutes: [
    { path: '', name: 'List', component: List, isIndex: true },
    { path: 'add', name: 'Add', component: Add, isIndex: false }
  ],
};
