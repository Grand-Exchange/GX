import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import {Cell} from 'react-mdl';

class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' Is Invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' Is Too Short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'Error');
  }

  render () {
    return (
      <div class = "aboutus-grid">
      <form className="demoForm">
        <h2>Sign Up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <Cell col ={12}>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Entered E-mail Address  </label>
          <input type="email" required className="form-control" name="Username"
            placeholder="E-mail Address"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        </Cell>


        <Cell col  = {12}>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Desired Username  </label>
          <input type="email" required className="form-control" name="Username"
            placeholder="Username"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Desired Password  </label>
          <input type="password" className="form-control" name="Password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>

        </Cell>

        <Cell col  = {12}>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">First Name  </label>
          <input type="email" required className="form-control" name="Username"
            placeholder="First"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>

        </Cell>

        <Cell col = {12}>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Last Name </label>
          <input type="email" required className="form-control" name="Username"
            placeholder="Last"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>

        </Cell>

        <button type="submit" className="btn btn-primary" enabled={!this.state.formValid}>Sign Up</button>
      </form>
      </div>
    )
  }
}

export default SignUp;
