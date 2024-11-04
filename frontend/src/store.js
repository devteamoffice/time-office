import { createStore, compose, applyMiddleware } from "redux";
import createReducer from "./reducers";
import { thunk } from "redux-thunk";
// Middlewares (only thunk for handling async actions)
const middlewares = [thunk];

// Enhancers (for middleware and Redux DevTools extension)
const enhancers = [applyMiddleware(...middlewares)];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// Create store with reducers and enhancers
const store = createStore(
  createReducer(), // Pass root reducer
  composeEnhancers(...enhancers) // Apply enhancers
);

// Enable hot module replacement for reducers in development mode
if (module.hot) {
  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers").default;
    store.replaceReducer(nextRootReducer); // Replace with the new reducer directly
  });
}

export default store;
