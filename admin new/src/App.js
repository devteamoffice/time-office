import React from "react";
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
function App() {
  const location = useLocation();

  // Find the current route's name
  const currentRoute = publicRoutes.find((route) =>
    new RegExp(`^${route.path.replace(/:\w+/g, "\\w+")}$`).test(
      location.pathname
    )
  );
  const pageName = currentRoute?.name || "Welcome";

  return (
    <AuthProvider>
      <div className="wrapper">
        <Header pageName={pageName} />
        <MainNav />
        <div className="page-content">
          <Router />
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
