import "./App.css";
import Router from "./routes/Router";
import Footer from "./component/Extras/Footer";
import "./assets/Product Page/css/vendor.min.css";
import "./assets/Product Page/css/icons.min.css";
import "./assets/Product Page/css/app.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Extras/Navbar";
// const token = localStorage.getItem("token");
// if (token) {
//   setToken(token);
//   // authenticate routes
//   store.dispatch({ type: SET_AUTH });
// }
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true,
      // mirror: false,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
