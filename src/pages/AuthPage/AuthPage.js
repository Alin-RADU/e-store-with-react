import React from 'react';

import SignIn from '../../components/Auth/SignIn/SignIn';

import './AuthPage.scss';

const AuthPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

export default AuthPage;
