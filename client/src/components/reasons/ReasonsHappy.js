import React from 'react';
import Navbar from '../navbar/Navbar.js'
import updateReasons from '../calls/updateReasons.js'


class ReasonsHappy extends React.Component {
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

      <button onClick={() => {this.reply_click("Great Culture")}} type="button" className="btn btn-lg reason" value={"Great Culture"}> Great Culture </button>
      <button onClick={() => {this.reply_click("Flexible Managers")}} type="button" className="btn btn-lg reason" value={"Flexible Managers"}> Flexible Managers </button>
      <button onClick={() => {this.reply_click("Friendly Co-workers")}} type="button" className="btn btn-lg reason" value={"Friendly Co-workers"}> Friendly Co-workers </button>
      <button onClick={() => {this.reply_click("Upbeat Work Environment")}} type="button" className="btn btn-lg reason" value={"Upbeat Work Environment"}> Upbeat Work Environment </button>
      <button onClick={() => {this.reply_click("Work is Appreciated")}} type="button" className="btn btn-lg reason" value={"Work is Appreciated"}> Work is Appreciated </button>
      <button onClick={() => {this.reply_click("Flexible Work Hours")}} type="button" className="btn btn-lg reason" value={"Flexible Work Hours"}> Flexible Work Hours </button>
      <button onClick={() => {this.reply_click("New Opportunities")}} type="button" className="btn btn-lg reason" value={"New Opportunities"}> New Opportunities </button>

      <button onClick={() => {updateReasons(this.state.reasons)}}>
            Submit
      </button>
    </div>
  )
  }
};


export default ReasonsHappy;
