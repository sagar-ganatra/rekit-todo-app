import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  GITHUB_GET_USER_BEGIN,
  GITHUB_GET_USER_SUCCESS,
  GITHUB_GET_USER_FAILURE,
  GITHUB_GET_USER_DISMISS_ERROR,
} from 'src/features/github/redux/constants';

import {
  getUser,
  dismissGetUserError,
  reducer,
} from 'src/features/github/redux/getUser';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('github/redux/getUser', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getUser succeeds', () => {
    const getUserMock = {
      data: {
        login: 'sagar-ganatra',
        name: 'Sagar Ganatra',
        company: 'McKinsey & Company',
        location: 'Bangalore'
      }
    };

    nock('https://api.github.com/users')
      .get('/sagar-ganatra')
      .reply(200, { data: getUserMock.data });
    const store = mockStore({ userDetails: {} });

    return store.dispatch(getUser('sagar-ganatra'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', GITHUB_GET_USER_BEGIN);
        expect(actions[1]).to.have.property('type', GITHUB_GET_USER_SUCCESS);
      });
  });

  // it('dispatches failure action when getUser fails', () => {
  //   const store = mockStore({});
  //
  //   return store.dispatch(getUser({ error: { message: '404 not found'} }))
  //     .catch(() => {
  //       const actions = store.getActions();
  //       expect(actions[0]).to.have.property('type', GITHUB_GET_USER_BEGIN);
  //       expect(actions[1]).to.have.property('type', GITHUB_GET_USER_FAILURE);
  //       expect(actions[1]).to.have.deep.property('data.error').that.exist;
  //     });
  // });

  it('returns correct action by dismissGetUserError', () => {
    const expectedAction = {
      type: GITHUB_GET_USER_DISMISS_ERROR,
    };
    expect(dismissGetUserError()).to.deep.equal(expectedAction);
  });

  it('handles action type GITHUB_GET_USER_BEGIN correctly', () => {
    const prevState = { getUserPending: false };
    const state = reducer(
      prevState,
      { type: GITHUB_GET_USER_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getUserPending).to.be.true;
  });

  it('handles action type GITHUB_GET_USER_SUCCESS correctly', () => {
    const prevState = { getUserPending: true };
    const state = reducer(
      prevState,
      { type: GITHUB_GET_USER_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getUserPending).to.be.false;
  });

  it('handles action type GITHUB_GET_USER_FAILURE correctly', () => {
    const prevState = { getUserPending: true };
    const state = reducer(
      prevState,
      { type: GITHUB_GET_USER_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getUserPending).to.be.false;
    expect(state.getUserError).to.exist;
  });

  it('handles action type GITHUB_GET_USER_DISMISS_ERROR correctly', () => {
    const prevState = { getUserError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: GITHUB_GET_USER_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getUserError).to.be.null;
  });
});
