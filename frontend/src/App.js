import logo from "./logo.svg";
import React from "react";
import Provider from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./context/Socket";
import { SET_Auth } from "./containers/Authentication/constants";
import Application from "./containers/Application";
import scrollToTop from "./scrollToTop";
import setToken from "./utils/token";
import store from "./store";

const token = localStorage.getItem("token");
if (token) {
  setToken(token);
  // authenticate routes
  store.dispatch({ type: SET_AUTH });
}
function App() {
  return <Provider></Provider>;
}

export default App;
