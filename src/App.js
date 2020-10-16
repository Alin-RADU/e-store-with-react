import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';

import './App.css';

const App = () => {
  return (
    <div className="body">
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
