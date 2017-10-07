import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Navbar extends Component {
  state = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: ''
  }

render() {
  return (
    <div className='td-form'>
      <Link to={"/dashboard"}>Dashboard</Link><br />
      <Link to={"/update"}>Update</Link><br />
      <Link to={"/goals"}>Goals</Link><br />
      <Link to={"/stats"}>Stats</Link><br />
      <Link to={"/signout"}>SignOut</Link><br />
    </div>
      );
    }
  }

export default Navbar;
