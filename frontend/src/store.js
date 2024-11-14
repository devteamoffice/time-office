// store.js
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import createReducer from "./reducers.js";

const initialState = {};

export const store = createStore(
  createReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
