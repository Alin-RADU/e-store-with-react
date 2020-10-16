import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';

import './App.css';

const App = () => {
  return (
    <div className="body">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/auth" exact component={AuthPage} />
      </Switch>
    </div>
  );
};

export default App;
