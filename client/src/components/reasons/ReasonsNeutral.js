import React, { Component } from 'react';
import UpdateReasons from '../../actions/updateReasons.js';
import { Link } from 'react-router';
// import ReasonStyle from './reasons.css'; note: imported via index.html // style folder
import FontAwesome from 'react-fontawesome';

class ReasonsNeutral extends Component {
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

  handleOnClick = () => {
    // some action...
    // then redirect

    UpdateReasons(this.state.reasons)
    window.location.assign("/stats");
    // this.setState({redirect: true});
  }


  render() {
    return (
      <div className='buttonDiv {ReasonStyle}'>

        <h2 id= 'reasonsId' onClick={() => {this.reply_click("long hours")}} type="button" className="btn btn-lg reason" value={"long hours"}> <b> Long Hours </b> </h2>
        <h2 id= 'reasonsId' onClick={() => {this.reply_click("under appreciated")}} type="button" className="btn btn-lg reason" value={"under appreciated"}> <b> Under Appreciated </b> </h2>
        <h2 id= 'reasonsId' onClick={() => {this.reply_click("bad work culture")}} type="button" className="btn btn-lg reason" value={"bad work culture"}> <b> Bad Work Culture </b> </h2>
        <h2 id= 'reasonsId' onClick={() => {this.reply_click("difficult boss")}} type="button" className="btn btn-lg reason" value={"difficult boss"}> <b> Difficult Boss </b> </h2>
        <h2 id= 'reasonsId' onClick={() => {this.reply_click("overworked")}} type="button" className="btn btn-lg reason" value={"overworked"}> <b> Overworked </b> </h2>
        <h2 id= 'reasonsId' onClick={() => {this.reply_click("underpaid")}} type="button" className="btn btn-lg reason" value={"underpaid"}> <b> Underpaid </b> </h2>
        <h2 id= 'reasonsId' onClick={() => {this.reply_click("no upward mobility")}} type="button" className="btn btn-lg reason" value={"no upward mobility"}> <b> No Upward Mobility </b> </h2>

        <br></br>

        <p id='submitP'>
            <FontAwesome name="arrow-circle-right" id="arrow" onClick={this.handleOnClick} />
        </p>
      </div>
    )
  }
}



export default ReasonsNeutral;
