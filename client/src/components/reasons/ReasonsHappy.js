import React, { Component } from 'react';
import UpdateReasons from '../../actions/updateReasons.js';
import { Link, Redirect } from 'react-router';
import FontAwesome from 'react-fontawesome';

class ReasonsHappy extends Component {
  constructor() {
    super();
    this.state = {
      reasons: [],
      redirect: false
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

        <h2 id = 'reasonsId' onClick={() => {this.reply_click("Great Culture")}} type="button" className="btn btn-lg reason" value={"Great Culture"}> <b> Great Culture </b> </h2>
        <h2 id = 'reasonsId' onClick={() => {this.reply_click("Flexible Managers")}} type="button" className="btn btn-lg reason" value={"Flexible Managers"}> <b> Flexible Managers </b> </h2>
        <h2 id = 'reasonsId' onClick={() => {this.reply_click("Friendly Co-workers")}} type="button" className="btn btn-lg reason" value={"Friendly Co-workers"}> <b> Friendly Co-workers </b> </h2>
        <h2 id = 'reasonsId' onClick={() => {this.reply_click("Upbeat Work Environment")}} type="button" className="btn btn-lg reason" value={"Upbeat Work Environment"}> <b> Upbeat Work Environment </b> </h2>
        <h2 id = 'reasonsId' onClick={() => {this.reply_click("Work is Appreciated")}} type="button" className="btn btn-lg reason" value={"Work is Appreciated"}> <b> Work is Appreciated </b> </h2>
        <h2 id = 'reasonsId' onClick={() => {this.reply_click("Flexible Work Hours")}} type="button" className="btn btn-lg reason" value={"Flexible Work Hours"}> <b> Flexible Work Hours </b> </h2>
        <h2 id = 'reasonsId' onClick={() => {this.reply_click("New Opportunities")}} type="button" className="btn btn-lg reason" value={"New Opportunities"}> <b> New Opportunities </b> </h2>

        <br></br>

        <p id='submitP'>
            <FontAwesome name="arrow-circle-right" id="arrow" onClick={this.handleOnClick} />
        </p>
      </div>
    )
  }
};


export default ReasonsHappy;
