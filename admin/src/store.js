import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./reducers";

// Create the Redux store
const store = configureStore({
  reducer: createReducer(), // Your root reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Includes thunk by default
  devTools: process.env.NODE_ENV !== "production",
});

// Enable hot module replacement for reducers in development mode
if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
