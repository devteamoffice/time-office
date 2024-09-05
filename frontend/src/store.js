import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import createReducer from "./reducers";

const middlewares = [thunk];

const enhancers = [applyMiddleware(...middlewares)];

// If Redux DevTools Extension is installed, use it; otherwise, use Redux compose
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  createReducer(), // No need for history, just pass the reducers directly
  composeEnhancers(...enhancers)
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers").default; // eslint-disable-line global-require
    store.replaceReducer(nextRootReducer());
  });
}

export default store;
