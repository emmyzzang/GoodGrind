import React, { Component } from 'react';
import axios from 'axios';
import LoginStyle from './signin.css';
import FontAwesome from 'react-fontawesome';

class Signin extends Component {
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
    <div className='containerStore {LoginStyle}'>
    <h2>Something something zen something placeholder...!</h2>
    <div className='td-form'>
        <form id="signin"  name="signin" method="post" action="signin">
      <div class='emailTextStyle'>
                <label for="email">Email Address</label>
      </div>
              <input class="text" name="email" type="text" />
      <div class='passwordTextStyle'>
              <label for="password">Password</label>
      </div>
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