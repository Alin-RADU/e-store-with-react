import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';

import { auth, createUserProfileDocument } from './api/firebase/firebase';

import './App.css';

class App extends Component {
  state = { currentUser: null };

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div className="body">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/auth" exact component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
