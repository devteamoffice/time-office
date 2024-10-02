import React from "react";
import Slider from "react-slick";
import "./clinets.css";
import c1 from "../../../assets/Image/Our Clients/image 1.png";
import c2 from "../../../assets/Image/Our Clients/image 2.png";
import c3 from "../../../assets/Image/Our Clients/image 3.png";
import c4 from "../../../assets/Image/Our Clients/image 4.png";
import c5 from "../../../assets/Image/Our Clients/image 5.png";
import c6 from "../../../assets/Image/Our Clients/image 6.png";

const OurClinets = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="container clinet-slider slider-container">
      <h2>
        Our <span>Clients</span>
      </h2>

      <Slider {...settings}>
        <div className="clinet-div">
          <img src={c1} alt="" />
        </div>
        <div className="clinet-div">
          <img src={c2} alt="" />
        </div>
        <div className="clinet-div">
          <img src={c3} alt="" />
        </div>
        <div className="clinet-div">
          <img src={c4} alt="" />
        </div>
        <div className="clinet-div">
          <img src={c5} alt="" />
        </div>
        <div className="clinet-div">
          <img src={c6} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default OurClinets;
