import React from "react";
import Gallery from "../../component/Extras/Gallery";
import SliderBrand from "../../component/HomePage/SliderBrand";
import Slider2 from "../../component/HomePage/Slider2";
import Whatnew from "../../component/HomePage/Whatsnew/Whatnew";
import Testomonial from "../../component/HomePage/testomonial/Testomonial";

import Insights from "../../component/HomePage/Insight/Insights";
import Recent from "../../component/HomePage/Recent/Recent";
import Hero from "../../component/HomePage/Hero Section/Hero";
import HeroSlider from "../../component/HomePage/HeroSection2/HeroNew";
import reviews from "../../assets/testimonials";
import OurClientScroll from "../../component/HomePage/OurClients/OurClientScroll";

import Freeshiping from "../../component/HomePage/FreeShip/Freeshiping";
import Freeship2 from "../../component/HomePage/FreeShip/Freeship2";
const Home = () => {
  return (
    <>
      <HeroSlider />
      {/* <NewHero /> */}

      <Freeship2 />
      {/* <Freeshiping /> */}
      <Gallery />
      <SliderBrand />
      <Slider2 />
      <Whatnew />
      <Testomonial reviews={reviews} />

      {/* <OurClinets /> */}
      <OurClientScroll />
      <Insights />
      <Recent />
    </>
  );
};

export default Home;
