import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DashboardStyle from './Dashboard.css';
import Navbar from '../navbar/Navbar.js'
import updateFeelings from '../calls/updateFeelings.js'
import FontAwesome from 'react-fontawesome';

// MEGAMAN
class Dashboard extends Component {

render() {

  return (

    <div className='container {DashboardStyle}'>

      <div className='faces'>

        <ul id = 'faceList'>
          <li className = 'face' > <Link to={"/happy"}>
            <FontAwesome name='smile-o' onClick={(event) =>
              {
                event.preventDefault();
                updateFeelings('+1');}
              }/>
            </Link> </li>

          <li className = 'face' > <Link to={"/meh"}>
          <FontAwesome name='meh-o' onClick={(event) =>
              {
                event.preventDefault();
                updateFeelings('0');}
              }/>
            </Link> </li>

          <li className = 'face' > <Link to={"/sad"}>
          <FontAwesome name='frown-o' onClick={(event) =>
              {
                event.preventDefault();
                updateFeelings('-1');}
              }/>
          </Link> </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Dashboard;
