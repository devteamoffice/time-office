import React from "react";
import "../styles/About.css";
import about_img1 from "../assets/Image/about_img1.png";
import card1 from "../assets/Image/about/card1.png";
import card2 from "../assets/Image/about/card2.png";
import card3 from "../assets/Image/about/card3.png";
import card4 from "../assets/Image/about/card4.png";
import card5 from "../assets/Image/about/card5.png";
import card6 from "../assets/Image/about/card6.png";
import WhyChoose from "./HomePage/WhyChooseus/WhyChoose";

const About = () => {
  return (
    <>
      <div className="section_main mb-4">ABOUT US</div>

      <div className="about_sec2">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="fsection">
                <h3>About Company</h3>
                <p>
                  Time Office Softech Pvt. Ltd. is a high tech company mainly
                  focusing on Biometric Recognition Technology, Attendance
                  Management Software, Cloud Based Attendance Solutions, access
                  Control equipments, Power Supply Designing and Manufacturing,
                  POE(Power on Ethernet)Switches, Hotel Locks, Biometric Villa
                  Locks.Time Office Softech Pvt. Ltd. having almost products
                  with BIS certifications which reflects the quality of our
                  products. We believe that everything we do must reflect on
                  customer’ satisfaction. We always sticks to quality, Customer
                  Oriented, Long Development as the dominant concept. With our
                  strong technical strength and enormous market experiences, we
                  are going to provide our customers’ high end biometric
                  products and customized services.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec_section">
                <img src={about_img1} alt="" className="img img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <section className="haedtext">
        <h4>
          We <span> Provide </span>
        </h4>
        <p className="my-2">
          We, "Chiptronics Solutions", are engaged in Manufacturing, Exporting,
          Importing and Trading a wide array of Door Locks And Brackets, Access
          Control Accessories, Smart Cards, Computerised Time Attendance Device
          and many more.
        </p>
      </section>

      <section className="provide_sec">
        {/* Card Complete Stater */}
        <div class="container-card">
          <div class="card-about">
            <img src={card3} alt="Card Image" />
            <div class="overlay">
              <img src={card3} alt="Card Image" style={{ width: "150px" }} />
              <div class="text">Fingerprint Scanner</div>
            </div>
          </div>
          <div class="card-about">
            <img src={card1} alt="Card Image" />
            <div class="overlay">
              <img src={card1} alt="Card Image" />
              <div class="text">Computerized Attendance </div>
            </div>
          </div>
          <div class="card-about">
            <img src={card2} alt="Card Image" />
            <div class="overlay">
              <img src={card2} alt="Card Image" />
              <div class="text">Door Locks And Brackets</div>
            </div>
          </div>
        </div>

        <div class="container-card my-4">
          <div class="card-about">
            <img src={card5} alt="Card Image" style={{ width: "250px" }} />
            <div class="overlay">
              <img src={card5} alt="Card Image" style={{ width: "250px" }} />
              <div class="text">Fingerprint Scanner</div>
            </div>
          </div>
          <div class="card-about">
            <img src={card4} alt="Card Image" />
            <div class="overlay">
              <img src={card4} alt="Card Image" />
              <div class="text">Computerized Attendance </div>
            </div>
          </div>
          <div class="card-about">
            <img src={card6} alt="Card Image" style={{ width: "250px" }} />
            <div class="overlay">
              <img src={card6} alt="Card Image" style={{ width: "200px" }} />
              <div class="text">Door Locks And Brackets</div>
            </div>
          </div>{" "}
        </div>
        <div class="button-about my-4">
          <button className="btn_view btn btn-primary">View More</button>
        </div>
      </section>

      {/* <section className="haedtext">
        <h4>Why Choose Us</h4>
      </section> */}

      <WhyChoose />
      {/* Card Round */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default About;
