import "./App.css";
import Router from "./routes/Router";
import Footer from "./component/Extras/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Extras/Navbar";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Use setTimeout to trigger an event after 3 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {showContent && <Router />}
      <Footer />
    </>
  );
}

export default App;
