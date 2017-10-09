import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'
import updateFeelings from '../calls/updateReasons.js'


// MEGAMAN
class DashboardReasons extends Component {
  state = {
    reasons: [],
  }

render() {
  const { reasons } = this.state

  return (
    // Create a form based on a column
    //buttons displayed with text information

    <div className='td-form'>

      <button type="button" className="btn btn-lg reason" value={"long hours"}> Long Hours </button>
      <button type="button" className="btn btn-lg reason" value={"under appreciated"}> Under Appreciated </button>
      <button type="button" className="btn btn-lg reason" value={"bad work culture"}> Bad Work Culture </button>
      <button type="button" className="btn btn-lg reason" value={"difficult boss"}> Difficult Boss </button>
      <button type="button" className="btn btn-lg reason" value={"overworked"}> Overworked </button>
      <button type="button" className="btn btn-lg reason" value={"underpaid "}> Underpaid </button>
      <button type="button" className="btn btn-lg reason" value={"no upward mobility "}> No Upward Mobility </button>


        <reason onClick={(event) => {
          event.preventDefault();

          onChange={(event) => {
            this.setState({
            feeling: event.target.value
          }}

          updateFeelings(this.state.reasons);
        }}>
            Submit
        </button>
      </div>

      );
    }
  }

// Because we are exporting the class
export default DashboardReasons;
