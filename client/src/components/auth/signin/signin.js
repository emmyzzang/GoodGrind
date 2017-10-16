import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../../actions';
import LoginStyle from './signin.css';
import FontAwesome from 'react-fontawesome';

// TODO - potentially remove axios...
import axios from 'axios';

const renderInput = field => (
  <div>
    <input {...field.input} type={field.type}/>
    {
      field.meta.touched &&
      field.meta.error &&
      <span className="error">{field.meta.error}</span>
    }
    </div>);

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;


    return (

    <div className='containerStore {LoginStyle}'>
      <h2>Something something zen something placeholder...!</h2>
      <div className='td-form'>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
              <label>Email:</label>
              <Field
                name="email"
                component={renderInput}
                type="email"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>Password:</label>
              <Field
                name="password"
                component={renderInput}
                type="password"
              />
            </fieldset>
            {this.renderAlert()}
            <button class="btn signInBtn" action="submit" className="btn btn-primary">Sign in</button>
          </form>
          <p class="message">Not Registered? <a class="createLink" href="">Create an Account</a></p>

        </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin'
})(
  connect(mapStateToProps, actions)(Signin)
);



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
