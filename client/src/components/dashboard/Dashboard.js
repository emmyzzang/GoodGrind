import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js'

// MEGAMAN
class Dashboard extends Component {
  state = {
    newTodo: ''
  }

render() {
  return (


    // Create a form based on a column
    <div className='td-form'>
    <Navbar></Navbar>
    hello

        <input
          name='firstName'
          value={this.state.firstName}
          onChange={(event) => {
            this.setState({
              firstName: event.target.firstName
            })
          }} />

      <button onClick={() => {
        this.props.handleSubmit(this.state.firstName);
      }}>
          Submit
        </button>

  </div>
      );
    }
  }

// Because we are exporting the class
export default Dashboard;
