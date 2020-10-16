import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../../../api/firebase/firebase';

import InputForm from '../../UI/InputForm/InputForm';
import Button from '../../UI/Button/Button';

import './SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  onFormSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
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
          <div className="buttons">
            <Button type="submit">Sign in</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with GOOGLE
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
