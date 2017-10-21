import axios from 'axios';
import { browserHistory } from 'react-router'; // Communicate URL history for react-router;
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';
// action creator always creates an object.
// w/ reduxThunk...it will return a function instead of an object.
// this function will be used to get direct access to dispatch function
// which magically forwards to all the actions


const ROOT_URL = 'http://localhost:3000'; // Backend Server IP Here

// you can make any async calls
export function signinUser({email, password}) {
  return function(dispatch) {
    // Submit email/password to the server

    // { email: email, password: password} ES6 shortcut...
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good....
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        // localStorage is provided natively...don't need import
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email);

        // - redirect to the route '/feature'
        browserHistory.push('/dashboard');

      })
      .catch((error) => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });

    // Introducing Redux-Thunk (middleware) -->
    // Give you direct access to dispatch (filter to all reducers)
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email);

        browserHistory.push('/dashboard');
      })
      .catch( error => dispatch(authError(error.response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  // Removes JWT Token
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

// Used to transfer data from backend to frontend
export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      })
    });
  }
}
