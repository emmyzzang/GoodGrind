import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard.js';
import Login from './components/login/Login.js';


class App extends Component {
  render() {
    return (
      <div className="App">
{// FOR DEBUGGING PURPOSES, USE THIS SECTION AND CHANGE THE PAGE NAME TO
// WHATEVER I WANT TO RENDER TO TEST -- ALSO IMPORT IT!!! :D
}
      <Dashboard></Dashboard>


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
    );
  }
}

export default App;
