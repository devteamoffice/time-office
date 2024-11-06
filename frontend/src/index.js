import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Socket/AuthContext"; // Import AuthProvider
import store from "./store";
import setToken from "./utils/token";
import { SET_AUTH } from "./containers/Authentication/constants";
const token = localStorage.getItem("token");

if (token) {
  // authenticate api authorization
  setToken(token);
  // authenticate routes
  store.dispatch({ type: SET_AUTH });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          {" "}
          {/* Wrap with AuthProvider */}
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
