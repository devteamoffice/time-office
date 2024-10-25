import React from "react";
import "../styles/whychoose.css";
import img1 from "../assets/Image/WhyChoose/img1.jpg";
import img2 from "../assets/Image/WhyChoose/img2.jpg";
import img3 from "../assets/Image/WhyChoose/img3.jpg";
import img4 from "../assets/Image/WhyChoose/img4.jpg";

const WhyChoose = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_choose my-2 mt-4">
              Why <span> Choose us</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2">
            <div className="choose_card ">
              <div className="choose_left">
                <img src={img1} alt="" className="img img-fluid" />
              </div>
              <div className="choose_right">
                <h4>Comprehensive Range</h4>
                <p>
                  We offer a wide array of attendance and access control
                  systems, catering to diverse security and management needs.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-2">
            <div className="choose_card">
              <div className="choose_left">
                <img src={img2} alt="" className="img img-fluid" />
              </div>
              <div className="choose_right">
                <h4>Advanced Technology</h4>
                <p>
                  Our systems feature state-of-the-art facial recognition,
                  fingerprint, and RFID technologies for secure, efficient
                  access control and attendance.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-2">
            <div className="choose_card">
              <div className="choose_left">
                <img src={img3} alt="" className="img img-fluid" />
              </div>
              <div className="choose_right">
                <h4>Scalable Solutions</h4>
                <p>
                  Our products scale from single-door controllers to multi-door
                  systems, providing flexible options for growing security
                  needs.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-2">
            <div className="choose_card">
              <div className="choose_left">
                <img src={img4} alt="" className="img img-fluid" />
              </div>
              <div className="choose_right">
                <h4>Reliable Support</h4>
                <p>
                  We deliver top-notch products backed by professional
                  installation, reliable performance, and ongoing technical
                  support for seamless operations.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
