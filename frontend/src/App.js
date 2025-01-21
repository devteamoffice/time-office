import { jwtDecode } from "jwt-decode";
import "./App.css";
import Router from "./routes/Router";
import Footer from "./component/Extras/Footer";
import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarN from "./component/Extras/HeaderN";
import { AuthContext } from "./context/Socket/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingIndicator from "./component/Extras/LoadingIndicator"; // Import the LoadingIndicator component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavbarN />
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <LoadingIndicator inline />
        </div>
      ) : (
        <Router isAuthenticated={isAuthenticated} />
      )}
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
    </>
  );
}

export default App;
