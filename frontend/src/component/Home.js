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
import HeroSlider from "./HomePage/HeroSection2/HeroNew";
import WhyChoose from "./HomePage/WhyChooseus/WhyChoose";

const Home = () => {
  return (
    <>
      Home
      <HeroSlider />
      <Gallery />
      <SliderBrand />
      <Slider2 />
      <Whatnew />
      <Testomonial />
      <br />
      <br />
      <br />
      <OurClinets />
      <WhyChoose />
      <Insights />
      <Recent />
    </>
  );
};

export default Home;
