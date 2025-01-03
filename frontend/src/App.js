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
  const [showContent, setShowContent] = useState(false);
  const { isAuthenticated, user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const timer = setTimeout(() => {
      setShowContent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);

    // Log the JWT token and decoded user ID (only in development mode)
    const token = localStorage.getItem("token");
    if (token && process.env.NODE_ENV === "development") {
      console.log("JWT Token:", token);

      // Decode the token to get the user ID
      try {
        const decodedToken = jwtDecode(token);
        console.log("User ID:", user?.id); // Adjust according to your token's payload structure
      } catch (error) {
        console.error("Invalid JWT token:", error);
      }
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavbarN />
      {showContent && <Router isAuthenticated={isAuthenticated} />}
      <Footer />
      {/* Add ToastContainer here */}
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
