import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';

import * as actions from './redux/actions/index';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import './App.css';

const App = ({ currentUser, onSetCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = onSetCurrentUser();
    return () => unsubscribeFromAuth();
  }, [onSetCurrentUser]);

  const guardSignInRoute = () => {
    if (!currentUser) {
      return <AuthPage />;
    }
    return <Redirect to="/" />;
  };

  return (
    <div className="body">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" render={guardSignInRoute} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCurrentUser: () => dispatch(actions.setCurrentUserAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
