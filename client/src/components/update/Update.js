import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'


class Update extends Component {
  state = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: ''
  }

render() {
  return (

    <Navbar></Navbar>


    <div className='td-form'>
      Update Page
    </div>
      );
    }
  }

export default Update;
