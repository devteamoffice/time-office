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
      </div>
    </AuthProvider>
  );
}

export default App;
