import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Common/Header";
import MainNav from "./components/Common/MainNav";
import Footer from "./components/Common/Footer";
import Router from "./router/Router";
import "./assets/css/app.min.css";
import { AuthProvider } from "./context/Socket/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicRoutes } from "./router/Routes";
import LoadingIndicator from "./components/Common/LoadingIndicator.";
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false); // Manage loading state

  // Find the current route's name
  const currentRoute = publicRoutes.find((route) =>
    new RegExp(`^${route.path.replace(/:\w+/g, "\\w+")}$`).test(
      location.pathname
    )
  );
  const pageName = currentRoute?.name || "Welcome";

  // Example API call simulation for page transition
  const simulateRouteChange = async () => {
    setLoading(true);
    try {
      // Simulate delay for route transition or API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthProvider>
      <div className="wrapper">
        <Header pageName={pageName} />
        <MainNav />
        <div className="page-content">
          {/* Display Loading Indicator during transitions */}
          {loading && <LoadingIndicator backdrop />}
          {/* Simulate loading when transitioning between pages */}
          <Router onRouteChange={simulateRouteChange} />
        </div>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
        />
      </div>
    </AuthProvider>
  );
}

export default App;
