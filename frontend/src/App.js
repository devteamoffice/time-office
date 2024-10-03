import "./App.css";
import Router from "./routes/Router";
import Footer from "./component/Extras/Footer";
import "./assets/Product Page/css/vendor.min.css";
import "./assets/Product Page/css/icons.min.css";
import "./assets/Product Page/css/app.min.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Extras/Navbar";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Trigger animations only once
    });

    // Use setTimeout to trigger an event after 3 seconds
    const timer = setTimeout(() => {
      setShowContent(true); // Set state or trigger something after the delay
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page smoothly
    }, 1000); // 3000 milliseconds = 3 seconds

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {showContent && <Router />} {/* Show Router only after 3 seconds */}
      <Footer />
    </>
  );
}

export default App;
