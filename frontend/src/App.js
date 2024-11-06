import "./App.css";
import Router from "./routes/Router";
import Footer from "./component/Extras/Footer";
import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarN from "./component/Extras/HeaderN";
import { AuthContext } from "./context/Socket/AuthContext"; // Import AuthContext

function App() {
  const [showContent, setShowContent] = useState(false);
  const { isAuthenticated } = useContext(AuthContext); // Get isAuthenticated from AuthContext

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Use setTimeout to trigger an event after 1 second
    const timer = setTimeout(() => {
      setShowContent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavbarN />
      {showContent && <Router isAuthenticated={isAuthenticated} />}
      <Footer />
    </>
  );
}

export default App;
