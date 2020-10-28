import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';
import CartDropdown from './components/Cart/CartDropdown/CartDropdown';

import * as actions from './redux/actions/index';
import { selectCurrentUser } from './redux/selectors/userSelectors';
import { selectCartHidden } from './redux/selectors/cartSelectors';

import './App.css';

const App = ({ currentUser, cartShowToggle, onSetCurrentUser }) => {
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
      <CartDropdown />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" render={guardSignInRoute} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartShowToggle: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCurrentUser: () => dispatch(actions.setCurrentUserAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
