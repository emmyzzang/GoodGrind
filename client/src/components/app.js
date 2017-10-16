import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar.js';

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
