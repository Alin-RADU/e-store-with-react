import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';

import * as actions from './redux/actions/index';
// import { auth, createUserProfileDocument } from './api/firebase/firebase';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = this.props.onSetCurrentUser();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  guardSignInRoute = () => {
    if (!this.props.currentUser) {
      return <AuthPage />;
    }
    return <Redirect to="/" />;
  };

  render() {
    return (
      <div className="body">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" render={this.guardSignInRoute} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

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
