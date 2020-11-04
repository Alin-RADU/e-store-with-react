import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header/Header';
import Spinner from './components/UI/Spinner/Spinner';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';

import * as actions from './redux/actions/index';
import { selectCurrentUser } from './redux/selectors/userSelectors';
import { selectCartHidden } from './redux/selectors/cartSelectors';

import './App.scss';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/auth" render={guardSignInRoute} />
            <Route path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
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
