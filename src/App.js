import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';

import * as actions from './redux/actions/index';
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from './api/firebase/firebase';
import { selectCurrentUser } from './redux/selectors/usersSelectors';
import { selectShopForPreview } from './redux/selectors/shopSelectors';

import './App.css';

class App extends Component {
  unsubscribeFormAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

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
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
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
    collectionsArray: selectShopForPreview(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
