import React, { Component } from 'react';
import axios from 'axios';
// MEGAMAN
class Login extends Component {
  state = {
    userName: '',
    password: '',
    ofMatters: ''
  }

  thisIsATest = myInput => {
    this.setState({ ofMatters: myInput });
  };

render() {
  return (
    // Create a form based on a column
    <div className='containerStore'>
    <h1>Test</h1>
    <div className='td-form'>
    <form id="signin" name="signin" method="post" action="signin">
              <label for="email">Email Address</label>
              <input class="text" name="email" type="text" />
              <label for="password">Password</label>
              <input name="password" type="password" />
              <input class="btn signInBtn" type="submit" value="Sign In" />
              <p class="message">Not Registered? <a class="createLink" href="">Create an Account</a></p>
            </form>


        {this.state.ofMatters}
      </div>
      </div>
      );
    }
  }

// Because we are exporting the class
export default Login;
