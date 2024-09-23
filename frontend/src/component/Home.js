import React from "react";
import ProductDetails from "./Product/ProductDetails";
import Gallery from "./product gallery/Gallery";
import SliderBrand from "./HomePage/SliderBrand";
import Slider2 from "./HomePage/Slider2";
import Whatnew from "./HomePage/Whatsnew/Whatnew";
import Testomonial from "./HomePage/testomonial/Testomonial";
import OurClinets from "./HomePage/OurClients/OurClinets";
import Insights from "./HomePage/Insight/Insights";
import Recent from "./HomePage/Recent/Recent";

const Home = () => {
  return (
    <>
      Home
      <Gallery />
      <SliderBrand />
      <Slider2 />
      <Whatnew />
      <Testomonial />
      <br />
      <br />
      <br />
      <OurClinets />
      <Insights />
      <Recent />
    </>
  );
};

export default Home;
