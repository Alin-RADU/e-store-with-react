import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';

import { auth } from './api/firebase/firebase';

import './App.css';

class App extends Component {
  state = { currentUser: null };

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged((user) =>
      this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    console.log(this.state.currentUser);
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
