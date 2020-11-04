import { useState } from 'react';

import { auth, signInWithGoogle } from '../../../api/firebase/firebase';

import InputForm from '../../UI/InputForm/InputForm';
import Button from '../../UI/Button/Button';

import './SignIn.scss';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const inputChangeHandler = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form
        onSubmit={(event) => {
          formSubmitHandler(event);
        }}
      >
        <InputForm
          name="email"
          type="email"
          value={email}
          handleChange={inputChangeHandler}
          label="email"
          // autoComplete="off"
          required
        />
        <InputForm
          name="password"
          type="password"
          value={password}
          handleChange={inputChangeHandler}
          label="password"
          required
        />
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
