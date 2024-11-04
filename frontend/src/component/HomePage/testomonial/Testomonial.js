import React from "react";
import Slider from "react-slick";
import "./testomonial.css";

const Testomonial = ({ reviews }) => {
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
        What Our <span>Customers</span> Say
      </h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="outer-testo">
              <div className="inner-testo">
                <div className="col1">
                  <div className="box-testo"> </div>
                </div>
                <div className="col2">
                  <hr />
                  <p> "{review.message}" </p>
                </div>
              </div>
              <div className="img_testomonial">
                <img src={review.image} alt={review.name} />
                <h3>{review.name}</h3>
                <p>{review.position}</p>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                    {Array.from({ length: 5 }, (v, i) => (
                      <li key={i}>
                        <i
                          className={
                            i < review.rating
                              ? "bx bxs-star"
                              : "bx bxs-star-half"
                          }
                        ></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testomonial;
