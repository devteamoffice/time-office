import React from "react";
import Slider from "react-slick";
import "./slider.css";
import s1 from "../../assets/Image/Slider1/image 19.png";
import s2 from "../../assets/Image/Slider1/image 20.png";
import s3 from "../../assets/Image/Slider1/image 21.png";
import s4 from "../../assets/Image/Slider1/image 22.png";
import s5 from "../../assets/Image/Slider1/image 23.png";

const SliderBrand = () => {
  var settings = {
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
              <div className="mr-2">
                <div className="slider-inner">
                  <img src={s1} alt="" />
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star-half"></i>
                      </li>
                    </ul>
                  </div>
                  <h4>Door Locks & Brackets</h4>
                </div>
              </div>
              <div className="mr-2">
                <div className="slider-inner">
                  <img src={s2} alt="" />
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star-half"></i>
                      </li>
                    </ul>
                  </div>
                  <h4>Access Control System</h4>
                </div>
              </div>

              <div className="mr-2">
                <div className="slider-inner">
                  <img src={s3} alt="" />
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star-half"></i>
                      </li>
                    </ul>
                  </div>
                  <h4>Biometric Access Controll </h4>
                </div>
              </div>

              <div className="mr-2">
                <div className="slider-inner">
                  <img src={s4} alt="" />
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star-half"></i>
                      </li>
                    </ul>
                  </div>
                  <h4>Barcode Scanner</h4>
                </div>
              </div>

              <div className="mr-2">
                <div className="slider-inner">
                  <img src={s5} alt="" />
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star-half"></i>
                      </li>
                    </ul>
                  </div>
                  <h4 style={{ textAlign: "center" }}>
                    Computerized Time Attendance Device
                  </h4>
                </div>
              </div>

              <div className="mr-2">
                <div className="slider-inner">
                  <img src={s1} alt="" />
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star"></i>
                      </li>
                      <li>
                        <i class="bx bxs-star-half"></i>
                      </li>
                    </ul>
                  </div>
                  <h4>Door Locks & Brackets</h4>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBrand;
