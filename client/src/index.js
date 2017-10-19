import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';

// Auth Pages
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';

// Reasons Pages
import ReasonsHappy from './components/reasons/ReasonsHappy';
import ReasonsNeutral from './components/reasons/ReasonsNeutral';
import ReasonsSad from './components/reasons/ReasonsSad';

// Stats Pages
import Linegraph from './components/stats/Linegraph';
import Stats from './components/stats/stats';

// Update Page
import Update from './components/update';

// Goals Pages
// import Goals from './components/goals';  TODO - GOALS PAGE RE-ENABLE

// note: feature is only used as a "cookie-cutter" template
import Feature from './components/feature';

import Dashboard from './components/dashboard';

import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in

if(token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    {/* Step 2 - Router & remove </App> */}
    <Router history={browserHistory}>
      <Route path="/" component={App}>

        {/* Sets default page to Signin */}
        <IndexRoute component={Signin} />
        {/* Authentication Routes */}
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        {/* Template Route used for cookie cutter */}
        <Route path="feature" component={RequireAuth(Feature)} />
        {/* Dashboard Route */}
        <Route path="dashboard" component={RequireAuth(Dashboard)} />
        {/* Reasons Routes */}
        <Route path="happy" component={RequireAuth(ReasonsHappy)} />
        <Route path="meh" component={RequireAuth(ReasonsNeutral)} />
        <Route path="sad" component={RequireAuth(ReasonsSad)} />
        {/* Update, Goals, Stats Routes */}
        <Route path="update" component={RequireAuth(Update)} />
        {/*<Route path="goals" component={RequireAuth(Goals)} />*/}
        <Route path="stats" component={RequireAuth(Stats)} />
      </Route>
    </Router>

  </Provider>
  , document.querySelector('.container'));
