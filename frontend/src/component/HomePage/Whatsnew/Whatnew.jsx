import React from "react";
import "./whatsnew.css";
import image1 from "../../../assets/Image/whatsnew/image1.png";
import image2 from "../../../assets/Image/whatsnew/image2.png";
import image3 from "../../../assets/Image/whatsnew/image3.png";
import image4 from "../../../assets/Image/whatsnew/image4.png";
import { Link } from "react-router-dom";

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
              <Link className="link" to="/store">
                Pad lock{" "}
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card_inner">
              <img src={image2} alt="" className="img img-fluid" />
              <p>Push button </p>
              <Link className="link" to="/store">
                Push button{" "}
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card_inner">
              <img src={image3} alt="" className="img img-fluid" />
              <p>Smart Cards</p>
              <Link className="link" to="/store">
                Smart Cards
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card_inner">
              <img src={image4} alt="" className="img img-fluid" />
              <p>Power Supply</p>
              <Link className="link" to="/store">
                Power Supply
              </Link>
            </div>
          </div>

          {/* card2 */}
        </div>
      </div>

      <div className="btnView">
        <button>View More</button>
      </div>
    </section>
  );
};

export default Whatnew;
