import axios from 'axios';
import {
  GITHUB_GET_USER_BEGIN,
  GITHUB_GET_USER_SUCCESS,
  GITHUB_GET_USER_FAILURE,
  GITHUB_GET_USER_DISMISS_ERROR,
} from './constants';

// Rekit uses redux-thunk for async actions by default: https://github.com/gaearon/redux-thunk
// If you prefer redux-saga, you can use rekit-plugin-redux-saga: https://github.com/supnate/rekit-plugin-redux-saga
export function getUser(userName) {
  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: GITHUB_GET_USER_BEGIN,
    });

    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    // const promise = new Promise((resolve, reject) => {
    //   // doRequest is a sample which resolves promise in 20ms. You should replace it with your own logic.
    //   // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
    //   const doRequest = new Promise((resolve2, reject2) => setTimeout(() => (args.error ? reject2('error') : resolve2('success')), 20));
    //   doRequest.then(
    //     (res) => {
    //       dispatch({
    //         type: GITHUB_GET_USER_SUCCESS,
    //         data: res,
    //       });
    //       resolve(res);
    //     },
    //     // Use rejectHandler as the second argument so that render errors won't be caught.
    //     (err) => {
    //       dispatch({
    //         type: GITHUB_GET_USER_FAILURE,
    //         data: { error: err },
    //       });
    //       reject(err);
    //     },
    //   );
    // });

    return new Promise((resolve, reject) => {
      axios.get('https://api.github.com/users/' + userName)
           .then(res => {
             dispatch({
               type: GITHUB_GET_USER_SUCCESS,
               payload: res.data,
             });
             resolve(res);
           })
           .catch(err => {
             console.log(err);
             dispatch({
               type: GITHUB_GET_USER_FAILURE,
               data: { error: err.message },
             });
            //  reject(err.message);
           });
    });
  };
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export function dismissGetUserError() {
  return {
    type: GITHUB_GET_USER_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case GITHUB_GET_USER_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        getUserPending: true,
        getUserError: null,
        userDetails: null
      };

    case GITHUB_GET_USER_SUCCESS:
      // The request is success
      return {
        ...state,
        getUserPending: false,
        getUserError: null,
        userDetails: action.payload
      };

    case GITHUB_GET_USER_FAILURE:
      // The request is failed
      return {
        ...state,
        getUserPending: false,
        getUserError: action.data.error,
        userDetails: null
      };

    case GITHUB_GET_USER_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        getUserError: null,
      };

    default:
      return state;
  }
}
