import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'
import updateFeelings from '../calls/updateFeelings.js'
import FontAwesome from 'react-fontawesome';
import { Link } from "react-router-dom";

// MEGAMAN
class Dashboard extends Component {

render() {

  return (

    <div className='td-form'>

      <h1> <Link to={"/happy"}>
        <FontAwesome name='smile-o' onClick={(event) =>
          {
            event.preventDefault();
            updateFeelings('+1');}
          }/>
        </Link> </h1>

      <h1> <Link to={"/meh"}>
      <FontAwesome name='meh-o' onClick={(event) =>
          {
            event.preventDefault();
            updateFeelings('0');}
          }/>
        </Link> </h1>

      <h1> <Link to={"/sad"}>
      <FontAwesome name='frown-o' onClick={(event) =>
          {
            event.preventDefault();
            updateFeelings('-1');}
          }/>
      </Link> </h1>

      </div>

      );
    }
  }

export default Dashboard;
