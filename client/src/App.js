import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Goals from './components/goals/Goals.js';
import Stats from './components/stats/Stats.js';
import Update from './components/update/Update.js';
import Dashboard from './components/dashboard/Dashboard.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/update" component={Update} />
            <Route exact path="/stats" component={Stats} />
            {/* TODO - NoMatch Route */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
