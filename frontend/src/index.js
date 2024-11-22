import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store";
import { checkAuth } from "./containers/Authentication/actions"; // Import checkAuth action
import { AuthProvider } from "./context/Socket/AuthContext";
import LoadingIndicator from "./component/Extras/LoadingIndicator";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dispatch checkAuth action to check if the user is authenticated
    store.dispatch(checkAuth()).finally(() => {
      setIsLoading(false); // Set loading to false once checkAuth is complete
    });
  }, []);

  if (isLoading) {
    return <LoadingIndicator />; // Show loading indicator while checking auth
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root /> {/* Render Root component which waits for authentication check */}
  </React.StrictMode>
);
