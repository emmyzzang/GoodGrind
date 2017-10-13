import React, { Component } from 'react';
import axios from 'axios';
import RegisterStyle from './Register.css';
import FontAwesome from 'react-fontawesome';

class Register extends Component {
  state = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: ''
  }

render() {
  return (
    <div className='containerStore {LoginStyle}'>
    <h2>Register...!</h2>
    <div className='td-form'>



        <form id="signin"  name="signin" method="post" action="signin">
      <div class='emailTextStyle'>
          <label for="firstname">First Name</label>
           <input name="firstname" placeholder="First Name"type="text" />
           <label for="lastname">Last Name</label>
           <input name="lastname" placeholder="Last Name"type="text" />
                <label for="email">Email Address</label>
      </div>
              <input class="text" name="email" type="text" />
      <div class='passwordTextStyle'>
              <label for="password">Password</label>
      </div>
              <input name="password" type="password" />
              <input class="btn signInBtn" type="submit" value="Register" />
              <p class="message">Not Registered? <a class="createLink" href="">Create an Account</a></p>
            </form>


        {this.state.ofMatters}
      </div>
      </div>
      );
    }
  }


export default Register;
