import React from "react";
import "./Freeshiping.css";

const Freeshiping = () => {
  return (
    <section className="mt-4">
      <div className="container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="inner_slide">
              <h3>icon</h3>
              <div className="innerslide_text ms-2">
                <h4>Free Shipping</h4>
                <p>Free shipping on all US order or order above $200</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner_slide">
              <h3>icon</h3>
              <div className="innerslide_text ms-2">
                <h4>24X7 Support</h4>
                <p>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner_slide">
              <h3>icon</h3>
              <div className="innerslide_text ms-2">
                <h4>30 Days Return</h4>
                <p>Simply return it within 30 days for an exchange</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner_slide">
              <h3>icon</h3>
              <div className="innerslide_text ms-2">
                <h4>Payment Secure</h4>
                <p>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freeshiping;
