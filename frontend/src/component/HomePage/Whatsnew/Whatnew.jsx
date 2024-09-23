import React from "react";
import "./whatsnew.css";
import image1 from "../../../assets/Image/whatsnew/image1.png";

const Whatnew = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-2">
            <div className="slider1_head">What’s New</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="card_inner">
              <img src={image1} alt="" className="img img-fluid" />
              <p>Pad lock </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card_inner">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
                alt=""
                className="img img-fluid"
              />
              <p>Push button </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card_inner">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
                alt=""
                className="img img-fluid"
              />
              <p>Smart Cards</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card_inner">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
                alt=""
                className="img img-fluid"
              />
              <p>Power supply</p>
            </div>
          </div>
          {/* card2 */}
        </div>
      </div>
    </section>
  );
};

export default Whatnew;
