import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to check current path
import "./App.css";
import Header from "./components/Common/Header";
import MainNav from "./components/Common/MainNav";
import Footer from "./components/Common/Footer";
import Router from "./router/Router";
import "./assets/css/app.min.css";
import { FutureProvider } from "./Context";
import { AuthProvider } from "./context/Socket/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthProvider>
      <div className="wrapper">
        {/* Conditionally render the layout components */}
        <Header />
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
