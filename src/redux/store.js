import { createStore, compose } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { createLogger } from 'redux-logger';

import rootReducer from './reducers/index';

// const logger = createLogger({
//   collapsed: true,
//   diff: true,
//   colors: {
//     title: () => '#08f26e',
//     prevState: () => '#ffa500',
//     action: () => '#03A9F4',
//     nextState: () => '#4CAF50',
//     error: () => '#F20404',
//   },
// });

// const middlewares = [logger];
// composeEnhancers(applyMiddleware(...middlewares))

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25,
  }) || compose;

export const store = createStore(rootReducer, composeEnhancers());
