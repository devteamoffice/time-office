import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import ComingPage from "./component/ComingPage";
import Contact from "./component/Contact";
import Error404New from "./component/Error404New";
import Error505 from "./component/Error505";
import Slider_exa from "./component/Slider_exa";
import Home from "./component/Home";
import Product from "./component/Product/Product";
import ProductDetails from "./component/Product/ProductDetails";
import "iconify-icon";
import Navbar from "./component/Navbar/Navbar";

function App() {
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
        </Routes>
      </BrowserRouter>

      {/* <Slidernew /> */}
    </>
  );
}

export default App;
