import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';

import * as actions from './redux/actions/index';
import { auth, createUserProfileDocument } from './api/firebase/firebase';

import './App.css';

class App extends Component {
  unsubscribeFormAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
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
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/auth" exact render={this.guardSignInRoute} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
