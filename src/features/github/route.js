import {
  DefaultPage,
} from './';

export default {
  path: 'github',
  name: 'Github',
  childRoutes: [
    { path: '', name: 'Search', component: DefaultPage, isIndex: true },
  ],
};
