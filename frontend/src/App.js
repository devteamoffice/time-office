import { jwtDecode } from "jwt-decode";
import "./App.css";
import Router from "./routes/Router";
import Footer from "./component/Extras/Footer";
import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarN from "./component/Extras/HeaderN";
import { AuthContext } from "./context/Socket/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000);

    // Decode token for user details in development
    const token = localStorage.getItem("token");
    if (token && process.env.NODE_ENV === "development") {
      console.log("JWT Token:", token);
      try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken); // Ensure proper structure
      } catch (error) {
        console.error("Invalid JWT token:", error);
      }
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavbarN />
      {isLoading ? (
        <div>Loading...</div>
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
