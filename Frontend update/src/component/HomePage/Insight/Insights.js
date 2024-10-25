import React from "react";
import insights1 from "../../../assets/Image/insights1.png";
import insights2 from "../../../assets/Image/insights2.png";
import "./insights.css";

const Insights = () => {
  return (
    <section className="insights-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading">
              Latest &nbsp; <span> Insights</span>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-5">
            <div className="colleft">
              {" "}
              <img src={insights1} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="col-right">
              <img src={insights2} alt="" />
            </div>
          </div>
        </div> */}

        <div className="main_card my-4">
          <div className="inner_card">
            <div className="card-left" data-aos="fade-right">
              <img src={insights1} alt="" />
              <div className="card-left-text">
                <p className="date pt-2 text-center">July 01, 2024</p>
                <h5 className="card-head">
                  "The Future of Attendance: Face Recognition Technology"
                </h5>
                <p className="card-para">
                  Face recognition is becoming a game-changer in attendance
                  solutions.
                </p>
                <div className="card-btn text-center">Read More...</div>
              </div>
            </div>
            <div className="card-right" data-aos="fade-left">
              <img src={insights2} alt="" />
              <div className="card-right-text">
                <p className="date pt-2 text-center">July 01, 2024</p>
                <h5 className="card-head">
                  "The Future of Attendance: Face Recognition Technology"
                </h5>
                <p className="card-para">
                  Face recognition is becoming a game-changer in attendance
                  solutions.
                </p>
                <div className="card-btn text-center">Read More...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
