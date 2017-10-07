import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'


class Goals extends Component {
  state = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: ''
  }

render() {
  return (

    <Navbar> </Navbar>

    <div className='td-form'>
      Goals Page
    </div>
      );
    }
  }

export default Goals;
