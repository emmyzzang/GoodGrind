import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';


// renders the input
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
    // Need to do something to log user in
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
      <div id='signinDiv'>
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
            <Field id = 'passwordDiv'
                name="password"
                component={renderInput}
                type="password"
            />
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign in</button>
        </form>
        <p class="message">Not Registered?<Link to={"/signup"}> Create An Account</Link></p>
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
