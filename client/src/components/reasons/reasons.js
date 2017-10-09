import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'
import updateReasons from '../calls/updateReasons.js'


// MEGAMAN
class DashboardReasons extends Component {

  state = {
      reasons: ""
  }

  // handleClick(event) {
  //   console.log(event.target.value)
  //   this.setState({
  //       reasons:  this.state.reasons
  //     })
  // }

  handleClick(event) {
    this.setState({
        reasons:  event.target.value
      }, function () {
    console.log(this.state.reasons);
  });
  }

  render() {
    const { reasons } = this.state

    return (
      <div className='td-form {NavbarStyle}'>

        <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-lg reason" value={"long hours"}> Long Hours </button>
        <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-lg reason" value={"under appreciated"}> Under Appreciated </button>
        <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-lg reason" value={"bad work culture"}> Bad Work Culture </button>
        <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-lg reason" value={"difficult boss"}> Difficult Boss </button>
        <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-lg reason" value={"overworked"}> Overworked </button>
        <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-lg reason" value={"underpaid "}> Underpaid </button>
        <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-lg reason" value={"no upward mobility "}> No Upward Mobility </button>

        <button onClick={(event) => {
            event.preventDefault();
            console.log(this.state.reasons)
            updateReasons(this.state.reasons);}}>
              Submit
        </button>

        </div>
      );
    }
  }

// Because we are exporting the class
export default DashboardReasons;
