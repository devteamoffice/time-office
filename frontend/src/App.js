import "./App.css";
import Router from "./routes/Router";
import Footer from "./component/Extras/Footer";
import "./assets/Product Page/css/vendor.min.css";
import "./assets/Product Page/css/icons.min.css";
import "./assets/Product Page/css/app.min.css";
import Navbar from "./component/Extras/Navbar";
// const token = localStorage.getItem("token");
// if (token) {
//   setToken(token);
//   // authenticate routes
//   store.dispatch({ type: SET_AUTH });
// }
function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
