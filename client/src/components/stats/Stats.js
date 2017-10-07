import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'


class Stats extends Component {
  state = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: ''
  }

render() {
  return (

    <Navbar></Navbar>

    <div className='td-form'>
      Stats Page
    </div>
      );
    }
  }

export default Stats;
