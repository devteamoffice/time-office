import React from "react";
import Slider from "react-slick";
import "./slider.css";
import s1 from "../../assets/Image/Slider1/image 19.png";
import s2 from "../../assets/Image/Slider1/image 20.png";
import s3 from "../../assets/Image/Slider1/image 21.png";
import s4 from "../../assets/Image/Slider1/image 22.png";
import s5 from "../../assets/Image/Slider1/image 23.png";
import n1 from "../../assets/Image/Slider1/1 .png";
import n2 from "../../assets/Image/Slider1/2.jpg";
import n3 from "../../assets/Image/Slider1/3.jpg";
import n4 from "../../assets/Image/Slider1/4.png";
import n5 from "../../assets/Image/Slider1/5.jpg";
import n6 from "../../assets/Image/Slider1/6.jpg";
import n7 from "../../assets/Image/Slider1/7.jpg";
import n8 from "../../assets/Image/Slider1/8.jpg";
import n9 from "../../assets/Image/Slider1/9.jpg";

const products = [
  {
    image: n1,
    title: "Z20R V2 Glass Door Lock",
  },
  {
    image: n2,
    title: "Electromagnetic Lock ",
  },
  {
    image: n3,
    title: "Remote Kit",
  },
  {
    image: n4,
    title: "Drop Bolt Lock",
  },
  {
    image: n5,
    title: "U Bracket For EM Lock",
  },
  {
    image: n6,
    title: "Thin Card",
  },
  {
    image: n7,
    title: "AI Face Identification",
  },
  {
    image: n8,
    title: "Emergency Glass Break Switch",
  },
  {
    image: n9,
    title: "Drop Bolt Lock Fully Glass",
  },
  // {
  //   image: s1,
  //   title: "Door Locks & Brackets",
  // },
  // {
  //   image: s2,
  //   title: "Access Control System",
  // },
  // {
  //   image: s3,
  //   title: "Biometric Access Control",
  // },
  // {
  //   image: s4,
  //   title: "Barcode Scanner",
  // },
  // {
  //   image: s5,
  //   title: "Computerized Time Attendance Device",
  // },
];

const SliderBrand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-2">
          <div className="slider1_head">Top Selling Product</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="slider-container productScroll">
            <Slider {...settings}>
              {products.map((product, index) => (
                <div className="mr-2" key={index}>
                  <div className="slider-inner">
                    <img src={product.image} alt={product.title} />
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star-half"></i>
                        </li>
                      </ul>
                    </div>
                    <h4 style={{ textAlign: "center" }}>{product.title}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBrand;
