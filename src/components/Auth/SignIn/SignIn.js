import React, { Component } from 'react';

import InputForm from '../../UI/InputForm/InputForm';
import Button from '../../UI/Button/Button';

import './SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  onInputChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form
          onSubmit={(event) => {
            this.onFormSubmitHandler(event);
          }}
        >
          <InputForm
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.onInputChangeHandler}
            label="email"
            autoComplete="off"
            required
          />
          <InputForm
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.onInputChangeHandler}
            label="password"
            required
          />
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
