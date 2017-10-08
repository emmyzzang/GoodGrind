import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavbarStyle from './Navbar.css';
import FontAwesome from 'react-fontawesome';

class Navbar extends Component {
  state = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: ''
  }

render() {
  return (
    <div className='td-form {NavbarStyle}'>
        <div class="good">GOOD</div>&nbsp;<div class="grind">GRIND</div><br /><br /><br />
        <hr />
    <ul>
      <li><Link to={"/dashboard"}><FontAwesome name='tachometer' />&nbsp;Dashboard</Link></li>
      <li><Link to={"/update"}><FontAwesome name='pencil' />&nbsp;Update</Link></li>
      <li><Link to={"/goals"}><FontAwesome name='rocket' />&nbsp;Goals</Link></li>
      <li><Link to={"/stats"}><FontAwesome name='line-chart' />&nbsp;Stats</Link></li>
      <li><Link to={"/signout"}><FontAwesome name='sign-out' />&nbsp;Log Out</Link></li>
    </ul>
    </div>
      );
    }
  }

export default Navbar;
