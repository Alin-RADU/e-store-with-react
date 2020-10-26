import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

let composeEnhancers;
const middlewares = [thunk];

const logger = createLogger({
  collapsed: true,
  diff: true,
  colors: {
    title: () => '#08f26e',
    prevState: () => '#ffa500',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },
});

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    }) || compose;
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
