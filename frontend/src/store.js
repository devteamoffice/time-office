// store.js
import { createStore, compose, applyMiddleware } from "redux";
import createReducer from "./reducers";
import { thunk } from "redux-thunk";
const middlewares = [thunk];

// Enable Redux DevTools Extension in development
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  createReducer(),
  composeEnhancers(applyMiddleware(...middlewares))
);

// Enable hot module replacement for reducers
if (module.hot) {
  module.hot.accept("./reducers", () => {
    const nextReducer = require("./reducers").default;
    store.replaceReducer(nextReducer);
  });
}

export default store;
