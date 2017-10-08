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
>>>>>>> master

// Stating 'extends Component' has nothing to do with the children
// It is extending the capability of the class being declared
// class App is declared with the extended ability of component
class App extends Component {
  render() {
    return (
      <div className="App">
{// FOR DEBUGGING PURPOSES, USE THIS SECTION AND CHANGE THE PAGE NAME TO
// WHATEVER I WANT TO RENDER TO TEST -- ALSO IMPORT IT!!! :D
}
      <Dashboard />


      {
        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        // </header>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
      }
      </div>
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

// So there's two things - states and props
// states is used internally at that specific class
// props in-a-nutshell is externally controlled by the parent

export default App;
