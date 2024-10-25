import React, { useEffect } from "react";
import "./recent.css";
import img1 from "../../../assets/Image/recent/1.png";
import img2 from "../../../assets/Image/recent/2.png";
import img3 from "../../../assets/Image/recent/3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Recent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true,
      // mirror: false,
      duration: 1000,
    });
  }, []);

  return (
    <div className="recent-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="recent-head">Recent</p>
          </div>
        </div>
        <div className="recent-card">
          <div className="recent_inner_card" data-aos="fade-right">
            <img src={img1} alt="" />
            <div className="recent_card-left-text">
              <p className="date-recent text-center">July 01, 2024</p>
              <h5 className="card-head">
                "Boost Employee Productivity with Smart Attendance Systems"
              </h5>
              <p className="card-para">
                Discover how an efficient attendance solution can directly
                impact employee productivity.
              </p>
              <div className="card-btn text-center">Read More...</div>
            </div>
          </div>
          {/* card-2******************* */}
          <div className="recent_inner_card" data-aos="zoom-in">
            <img src={img2} alt="" />
            <div className="recent_card-left-text">
              <p className="date-recent text-center">July 01, 2024</p>
              <h5 className="card-head">
                "How AI is Revolutionizing Attendance Tracking"
              </h5>
              <p className="card-para">
                Discover how artificial intelligence is transforming the way
                businesses...
              </p>
              <div className="card-btn text-center">Read More...</div>
            </div>
          </div>
          {/* Card-3 ************* */}
          <div className="recent_inner_card" data-aos="fade-left">
            <img src={img3} alt="" />
            <div className="recent_card-left-text">
              <p className="date-recent text-center">July 01, 2024</p>
              <h5 className="card-head">
                "The Benefits of Cloud-Based Attendance Solutions for Remote
                Teams"
              </h5>
              <p className="card-para">
                With remote work becoming more common, cloud-based attendance
                systems...
              </p>
              <div className="card-btn text-center">Read More...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
