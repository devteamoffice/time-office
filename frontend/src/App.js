import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import ComingPage from "./component/ComingPage";
import Contact from "./component/Contact";
import Error404New from "./component/Error404New";
import Error505 from "./component/Error505";
import Slider_exa from "./component/Slider_exa";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/Product/Product";

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
        </Routes>
      </BrowserRouter>

      {/* <Slidernew /> */}
    </>
  );
}

export default App;
