import React from "react";
import ProductDetails from "./Product/ProductDetails";
import Gallery from "./product gallery/Gallery";
import SliderBrand from "./HomePage/SliderBrand";
import Slider2 from "./HomePage/Slider2";
import Whatnew from "./HomePage/Whatsnew/Whatnew";

const Home = () => {
  return (
    <>
      Home
      <Gallery />
      <SliderBrand />
      <Slider2 />
      <Whatnew />
    </>
  );
};

export default Home;
