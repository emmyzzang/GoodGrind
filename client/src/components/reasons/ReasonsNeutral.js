import React from 'react';
import Navbar from '../navbar/Navbar.js'
import updateReasons from '../calls/updateReasons.js'

const reasons = [];

function reply_click(clicked_value)
  {
    reasons.push(clicked_value);
    console.log(reasons)
  }


const DashboardReasons = () => (

  <div className='td-form {NavbarStyle}'>

    <button onClick={() => {reply_click("")}} type="button" className="btn btn-lg reason" value={"long hours"}> Long Hours </button>
    <button onClick={() => {reply_click("")}} type="button" className="btn btn-lg reason" value={"under appreciated"}> Under Appreciated </button>
    <button onClick={() => {reply_click("")}} type="button" className="btn btn-lg reason" value={"bad work culture"}> Bad Work Culture </button>
    <button onClick={() => {reply_click("")}} type="button" className="btn btn-lg reason" value={"difficult boss"}> Difficult Boss </button>
    <button onClick={() => {reply_click("")}} type="button" className="btn btn-lg reason" value={"overworked"}> Overworked </button>
    <button onClick={() => {reply_click("")}} type="button" className="btn btn-lg reason" value={"underpaid"}> Underpaid </button>
    <button onClick={() => {reply_click("")}} type="button" className="btn btn-lg reason" value={"no upward mobility"}> No Upward Mobility </button>

    <button onClick={() => {updateReasons(reasons)}}>
          Submit
    </button>
  </div>
);


export default DashboardReasons;
