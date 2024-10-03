import React from "react";
import logo from "../../assets/images/Logo.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-section">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer_inner">
                <div className="footer-1">
                  <div className="footer_logo">
                    <img src={logo} alt="" />
                  </div>
                  <p className="pt-2">
                    e-Time Office Softech Pvt. Ltd. is a high tech company
                    mainly focusing on Biometric Recognition Technology,
                    Attendance Management Software, Cloud Based Attendance
                    Solutions, access Control equipments, Power Supply Designing
                    and Manufacturing, POE(Power on Ethernet)Switches, Hotel
                    Locks, Biometric Villa Locks.
                  </p>
                  <div className="col-social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"
                      ></path>
                    </svg>
                    <p>08069010000</p>
                  </div>
                  <div className="col-social">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 8q-1.25 0-2.125-.875T16 5t.875-2.125T19 2t2.125.875T22 5t-.875 2.125T19 8M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h10.1q-.1.5-.1 1t.1 1q.175.8.575 1.488T15.65 8.7L12 11L4 6v2l8 5l5.275-3.3q.425.15.85.225T19 10q.8 0 1.575-.25T22 9v9q0 .825-.587 1.413T20 20z"
                      ></path>
                    </svg>
                    <p>info@chiptronics.co.in</p>
                  </div>
                </div>
                <div className="footer-2">
                  <h2>Information</h2>
                  <ul>
                    <li>
                      <Link to={"/contact"}> About </Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>More Search</Link>
                    </li>
                    <li>
                      <Link to="/contact">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blog </Link>
                    </li>
                    <li>
                      <Link href="/events">Events </Link>
                    </li>
                  </ul>
                  <p>
                    Timeoffice Softech Pvt. Ltd. B205, Anannya Complex, Near
                    Akshar Chowk O.P. Road, Vadodara-390020 Contact Us On :-
                    (080-6901 0000) E-mail :- info@chiptronics.co.in
                  </p>
                </div>
                <div className="footer-3">
                  <h2>Helpful Links</h2>
                  <ul>
                    <li>
                      <a href="">Services</a>
                    </li>
                    <li>
                      <a href="">Supports</a>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy </Link>
                    </li>
                    <li>
                      <Link to="/refund-policy">
                        Cancellation & Refund Policy{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/shipping-policy">
                        Shipping & Delivery Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="footer-4">
                  <h2>Subscribe For More</h2>
                  <div className="footer-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div className="footer-input">
                    <input type="text" name="" id="" placeholder="Subsribe" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* Copy Wirte  */}
            <div className="copy-footer">
              <div className="copyFooter-left">
                <p>
                  All Rights Reserved. Designed and Developed By Picky Vibe LLP.
                </p>
              </div>
              <div className="copyFooter-right">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
