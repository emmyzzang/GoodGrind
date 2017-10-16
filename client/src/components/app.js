import React, { Component } from 'react';
import Navbar from './navbar/Navbar.js';
import registerServiceWorker from '../registerServiceWorker';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
