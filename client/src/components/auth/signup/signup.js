import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../../actions';

const renderInput = ({ input, label, type, meta: { touched, error, warning }}) => (
  <fieldset className="form-group">
    <label htmlFor={input.name}>{label}</label>
    <input className="form-control" {...input} type={type}/>
    { touched && error && <span className="text-danger">{error}</span>}
  </fieldset>
);

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  renderAlert(){
    if(this.props.errorMessage) {
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
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className=="form-group">
              <label>Email: </label>
              <Field
                name="email"
                component={renderInput}
                type="email"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>Password: </label>
              <Field
                  name="password"
                  component={renderInput}
                  type="password"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>Confirm Password: </label>
              <Field
                  name="passwordConfirm"
                  component={renderInput}
                  type="password"
              />
            </fieldset>
            {this.renderAlert()}
            <button action="submit" className="btn btn-primary">Sign up!</button>
          </form>
      );
    }
}

function validate(formProps) {
  const errors = {};

  if(!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if(!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter password confirmation';
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  validate
})(
  connect(mapStateToProps, actions)(Signup)
);
