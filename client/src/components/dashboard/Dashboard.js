import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'
import updateFeelings from '../calls/updateFeelings.js'
import FontAwesome from 'react-fontawesome';
import { Link } from "react-router-dom";

// MEGAMAN
class Dashboard extends Component {
//   state = {
//     feeling: '',
//   }
//
//
//
// updateFeelings = () => {
//
//     onChange={(event) => {
//       this.setState({
//         feeling: event.target.value
//       })
//     }} />

render() {
  // const { feeling } = this.state

  return (
    // Create a form based on a column
    <div className='td-form'>

      <h1> <Link to={"/Happy"}>
        <FontAwesome name='smile-o' onClick={(event) =>
          {
            event.preventDefault();
            updateFeelings('+1');}
          }/>
        </Link> </h1>

      <h1> <Link to={"/Meh"}>
      <FontAwesome name='meh-o' onClick={(event) =>
          {
            event.preventDefault();
            updateFeelings('0');}
          }/>
        </Link> </h1>

      <h1> <Link to={"/Sad"}>
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

// Because we are exporting the class
export default Dashboard;
