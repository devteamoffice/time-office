import React from "react";
import Slider from "react-slick";
import "./testomonial.css";
import testo from "../../../assets/Image/testimonial.png";

const Testomonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
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
    <div className="container main-slider-testo slider-container">
      <h2>
        What Our <span>Customer</span> Says
      </h2>
      <Slider {...settings}>
        <div>
          <div className="outer-testo">
            <div className="inner-testo">
              <div className="col1">
                <div className="box-testo"> </div>
              </div>
              <div className="col2">
                <hr />
                <p>
                  {" "}
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  deleniti veniam nihil consectetur. Animi error commodi id
                  dolorem asperiores. Repellendus quae delectus suscipit, modi
                  laudantium culpa totam nisi at laborum. "
                </p>
              </div>
            </div>
            <div className="img_testomonial">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png"
                alt=""
              />
              <h3>Yashika Mishra</h3>
              <p>HR</p>
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
            </div>
          </div>
        </div>

        {/* This is our 4th and main component */}

        <div>
          <div className="outer-testo">
            <div className="inner-testo">
              <div className="col1">
                <div className="box-testo"> </div>
              </div>
              <div className="col2">
                <hr />
                <p>
                  {" "}
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  deleniti veniam nihil consectetur. Animi error commodi id
                  dolorem asperiores. Repellendus quae delectus suscipit, modi
                  laudantium culpa totam nisi at laborum. "
                </p>
              </div>
            </div>
            <div className="img_testomonial">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png"
                alt=""
              />
              <h3>Yashika Mishra</h3>
              <p>HR</p>
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
            </div>
          </div>
        </div>
        <div>
          <div className="outer-testo">
            <div className="inner-testo">
              <div className="col1">
                <div className="box-testo"> </div>
              </div>
              <div className="col2">
                <hr />
                <p>
                  {" "}
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  deleniti veniam nihil consectetur. Animi error commodi id
                  dolorem asperiores. Repellendus quae delectus suscipit, modi
                  laudantium culpa totam nisi at laborum. "
                </p>
              </div>
            </div>
            <div className="img_testomonial">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png"
                alt=""
              />
              <h3>Yashika Mishra</h3>
              <p>HR</p>
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
            </div>
          </div>
        </div>
        <div>
          <div className="outer-testo">
            <div className="inner-testo">
              <div className="col1">
                <div className="box-testo"> </div>
              </div>
              <div className="col2">
                <hr />
                <p>
                  {" "}
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  deleniti veniam nihil consectetur. Animi error commodi id
                  dolorem asperiores. Repellendus quae delectus suscipit, modi
                  laudantium culpa totam nisi at laborum. "
                </p>
              </div>
            </div>
            <div className="img_testomonial">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png"
                alt=""
              />
              <h3>Yashika Mishra</h3>
              <p>HR</p>
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
            </div>
          </div>
        </div>
        <div>
          <div className="outer-testo">
            <div className="inner-testo">
              <div className="col1">
                <div className="box-testo"> </div>
              </div>
              <div className="col2">
                <hr />
                <p>
                  {" "}
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  deleniti veniam nihil consectetur. Animi error commodi id
                  dolorem asperiores. Repellendus quae delectus suscipit, modi
                  laudantium culpa totam nisi at laborum. "
                </p>
              </div>
            </div>
            <div className="img_testomonial">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png"
                alt=""
              />
              <h3>Yashika Mishra</h3>
              <p>HR</p>
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
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testomonial;
