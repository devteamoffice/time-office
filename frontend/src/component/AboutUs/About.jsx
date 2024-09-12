import React from "react";
import "./aboutus.css";
const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-hero">
        <span class="about-hero">ABOUT US</span>
      </div>

      <div className="about-company">
        <span>About Company</span>
        <p>
          Time Office Softech Pvt. Ltd. is a high tech company mainly focusing
          on Biometric Recognition Technology, Attendance Management Software,
          Cloud Based Attendance Solutions, access Control equipments, Power
          Supply Designing and Manufacturing, POE(Power on Ethernet)Switches,
          Hotel Locks, Biometric Villa Locks.Time Office Softech Pvt. Ltd.
          having almost products with BIS certifications which reflects the
          quality of our products. We believe that everything we do must reflect
          on customer’ satisfaction. We always sticks to quality, Customer
          Oriented, Long Development as the dominant concept. With our strong
          technical strength and enormous market experiences, we are going to
          provide our customers’ high end biometric products and customized
          services.
        </p>
        <div className="about-img" />
      </div>

      <div className="we-provide">
        <span>We Provide</span>
        <p>
          We, "Chiptronics Solutions", are engaged in Manufacturing, Exporting,
          Importing and Trading a wide array of Door Locks And Brackets, Access
          Control Accessories, Smart Cards, Computerised Time Attendance Device
          and many more.
        </p>

        <div className="we-provide-item"></div>
        <div className="we-provide-item"></div>
        <div className="we-provide-item"></div>
        <div className="we-provide-item"></div>
        <div className="we-provide-item"></div>
        <div className="we-provide-item"></div>
      </div>
    </div>
  );
};

export default About;
