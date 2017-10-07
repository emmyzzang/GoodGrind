import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: ''
  }

render() {
  return (
    <div className='td-form'>
      <a href="test">link1</a>
      <a href="test">link2</a>
      <a href="test">link3</a>
      <a href="test">link4</a>
    </div>
      );
    }
  }

export default Navbar;
