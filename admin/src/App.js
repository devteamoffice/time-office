import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Common/Header";
import MainNav from "./components/Common/MainNav";
import Footer from "./components/Common/Footer";
import StatsRow from "./components/Statistics/StatsRow";
import "./assets/css/app.min.css";
import Router from "./router/Router";
import { FutureProvider } from "./Context";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainNav />

      <div className="page-content">
        <Router />
        <Footer />
      </div>
    </div>
  );
}

export default App;
