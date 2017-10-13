import React from 'react';
import Navbar from '../navbar/Navbar.js';
import updateReasons from '../calls/updateReasons.js';
import { Link } from "react-router-dom";
import ReasonStyle from './reasons.css';
import FontAwesome from 'react-fontawesome';


class ReasonsNeutral extends React.Component {
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
      <div className='buttonDiv {ReasonStyle}'>

        <h2 onClick={() => {this.reply_click("meh")}} type="button" className="btn btn-lg reason" value={"long hours"}> <b> Long Hours </b> </h2>
        <h2 onClick={() => {this.reply_click("meh")}} type="button" className="btn btn-lg reason" value={"under appreciated"}> <b> Under Appreciated </b> </h2>
        <h2 onClick={() => {this.reply_click("meh")}} type="button" className="btn btn-lg reason" value={"bad work culture"}> <b> Bad Work Culture </b> </h2>
        <h2 onClick={() => {this.reply_click("meh")}} type="button" className="btn btn-lg reason" value={"difficult boss"}> <b> Difficult Boss </b> </h2>
        <h2 onClick={() => {this.reply_click("meh")}} type="button" className="btn btn-lg reason" value={"overworked"}> <b> Overworked </b> </h2>
        <h2 onClick={() => {this.reply_click("meh")}} type="button" className="btn btn-lg reason" value={"underpaid"}> <b> Underpaid </b> </h2>
        <h2 onClick={() => {this.reply_click("meh")}} type="button" className="btn btn-lg reason" value={"no upward mobility"}> <b> No Upward Mobility </b> </h2>

        <br></br>

        <p id='submitP'>
          <Link to="/stats">
            <FontAwesome name="arrow-circle-right" id="arrow" onClick={() => {updateReasons(this.state.reasons)}}/>
          </Link>
        </p>
      </div>
    )
  }
}



export default ReasonsNeutral;
