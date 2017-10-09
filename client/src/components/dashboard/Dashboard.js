import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'
import updateFeelings from '../calls/updateFeelings.js'


// MEGAMAN
class Dashboard extends Component {
  state = {
    feeling: '',
  }

render() {
  const { feeling } = this.state

  return (
    // Create a form based on a column
    <div className='td-form'>
      hello
          <input
            name='feeling'
            value={feeling}
            onChange={(event) => {
              this.setState({
                feeling: event.target.value
              })
            }} />

        <button onClick={(event) => {event.preventDefault(); updateFeelings(this.state.feeling);}}>
            Submit
        </button>
      
      </div>

      );
    }
  }

// Because we are exporting the class
export default Dashboard;
