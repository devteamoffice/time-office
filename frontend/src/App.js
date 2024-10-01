import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import ComingPage from "./component/ComingPage";
import Error404New from "./component/Error404New";
import Error505 from "./component/Error505";
import Slider_exa from "./component/Slider_exa";
import Home from "./component/Home";
import Product from "./component/Product/Product";
import ProductDetails from "./component/Product/ProductDetails";
import "iconify-icon";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./component/Contactus/Contact";
import TermCondition from "./component/Policy Pages/TermCondition";
import CancellationRefundPolicy from "./component/Policy Pages/CancellationRefundPolicy";
import PrivacyPolicy from "./component/Policy Pages/PrivacyPolicy";
import ShippingDelivery from "./component/Policy Pages/ShippingDelivery";

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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error404" element={<Error404New />} />
          <Route path="/error505" element={<Error505 />} />
          <Route path="/commingpage" element={<ComingPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/details" element={<ProductDetails />} />
          <Route path="/policy/termcondition" element={<TermCondition />} />
          <Route
            path="/policy/cancelRefund"
            element={<CancellationRefundPolicy />}
          />
          <Route path="/policy/privacypolicy" element={<PrivacyPolicy />} />
          <Route
            path="/policy/shippingdelivery"
            element={<ShippingDelivery />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>

      {/* <Slidernew /> */}
    </>
  );
}

export default App;
