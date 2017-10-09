import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'
import updateFeelings from '../calls/updateFeelings.js'


// MEGAMAN
class Dashboard extends Component {
  state = {
    date: '',
    feeling: '',
  }

render() {
  const { date, feeling } = this.state

  return (
    // Create a form based on a column
    <div className='td-form'>
      hello

          <input
            name='date'
            value= {date}
            onChange={(event) => {
              this.setState({
                date: event.target.value
              })
            }} />

          <input
            name='feeling'
            value={feeling}
            onChange={(event) => {
              this.setState({
                feeling: event.target.value
              })
            }} />

        <button onClick={(event) => {
          event.preventDefault();
          updateFeelings(this.state.date, this.state.feeling);
        }}>
            Submit
          </button>
      </div>

      );
    }
  }

// Because we are exporting the class
export default Dashboard;
