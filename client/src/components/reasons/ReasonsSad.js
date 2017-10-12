import React from 'react';
import Navbar from '../navbar/Navbar.js';
import updateReasons from '../calls/updateReasons.js';
import { Link } from "react-router-dom";

class ReasonsSad extends React.Component {
  constructor() {
    super();
    this.state = {
      reasons: []
    }
  }

  reply_click(clicked_value) {
    const reasons = [];
    reasons.push(clicked_value)
    this.setState({
      reasons: this.state.reasons.concat(reasons)
    })
  }

  render() {
    return (
      <div className='td-form {NavbarStyle}'>

        <button onClick={() => {this.reply_click("long hours")}} type="button" className="btn btn-lg reason" value={"long hours"}> Long Hours </button>
        <button onClick={() => {this.reply_click("under appreciated")}} type="button" className="btn btn-lg reason" value={"under appreciated"}> Under Appreciated </button>
        <button onClick={() => {this.reply_click("bad work culture")}} type="button" className="btn btn-lg reason" value={"bad work culture"}> Bad Work Culture </button>
        <button onClick={() => {this.reply_click("difficult boss")}} type="button" className="btn btn-lg reason" value={"difficult boss"}> Difficult Boss </button>
        <button onClick={() => {this.reply_click("overworked")}} type="button" className="btn btn-lg reason" value={"overworked"}> Overworked </button>
        <button onClick={() => {this.reply_click("underpaid")}} type="button" className="btn btn-lg reason" value={"underpaid"}> Underpaid </button>
        <button onClick={() => {this.reply_click("no upward mobility")}} type="button" className="btn btn-lg reason" value={"no upward mobility"}> No Upward Mobility </button>

        <Link to="/stats">
          <button onClick={() => {updateReasons(this.state.reasons)}}>
                Submit
          </button>
        </Link>
      </div>
    )
  }
}


export default ReasonsSad;
