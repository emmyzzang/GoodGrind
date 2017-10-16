import React from 'react';
import ReachDOM from 'reach-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// Components
import App from './components/app'
import Signin from './components/signin/signin'; // TODO - fix & Adapt CSS
import Signout from './components/signout/signout';
import Signup from './components/signup/signup';
// TODO - Remove Register folder && Register.js

// Features //
import Goals from './components/goals/Goals';
import Stats from './components/stats/Stats';
import Update from './components/update/Update';
import Dashboard from './components/dashboard/Dashboard';
import Sad from './components/reasons/ReasonsSad';
import Happy from './components/reasons/ReasonsHappy';
import Meh from './components/reasons/ReasonsNeutral';
// Features End //

import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

// Middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if(token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Signin} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />

        // Features...
        <Route path="dashboard" component={RequireAuth(Dashboard)} />
        <Route path="goals" component={RequireAuth(Goals)} />
        <Route path="update" component={RequireAuth(Update)} />
        <Route path="stats" component={RequireAuth(Stats)} />
        <Route path="sad" component={RequireAuth(Sad)} />
        <Route path="happy" component={RequireAuth(Happy)} />
        <Route path="meh" component={RequireAuth(Meh)} />
      </Route>
    </Router>
  </Provider>, document.querySelector('.container'));
