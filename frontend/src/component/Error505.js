import React from "react";
import "../styles/error404.css";
import error505img from "../assets/Image/505error.png";
const Error505 = () => {
  return (
    <>
      <div className="container505">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text505page">
              <h1>500</h1>
              <h3>Sorry, It’s not you. It’s us</h3>
              We are experiencing an internal server problem. Please try again
              later.
            </div>
            <div className="col-md-6 d-flex align-self-center justify-content-center ">
              <img src={error505img} className="img img-fluid " alt="" />
            </div>
          </div>
        </div>
        <div className="d-flex align-self-center justify-content-center ">
          {" "}
          <a href="/" className="btn error-btn my-2">
            Go Home →
          </a>
        </div>
      </div>
    </>
  );
};

export default Error505;
