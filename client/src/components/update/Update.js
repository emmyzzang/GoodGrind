import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UpdateStyle from './Update.css';
import Navbar from '../navbar/Navbar.js'
import updateFeelings from '../calls/updateFeelings.js'
import FontAwesome from 'react-fontawesome';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// MEGAMAN
class Update extends Component {

render() {

  return (

    <div className='container {UpdateStyle}'>

      <div className='faces'>

        <ul id = 'faceList'>
          <li className = 'face' >
            <Link to="/happy">
            <FontAwesome name='smile-o'
              onClick={(event) => {updateFeelings('+1');}
              }/>
            </Link>
          </li>

          <li className = 'face' >
              <Link to="/meh">
                <FontAwesome name='meh-o'
                  onClick={(event) => {updateFeelings('0');}
                }/>
              </Link>
            </li>

          <li className = 'face' >
            <Link to="/sad">
              <FontAwesome name='frown-o'
                onClick={(event) => {updateFeelings('-1');}
                }/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Update;
