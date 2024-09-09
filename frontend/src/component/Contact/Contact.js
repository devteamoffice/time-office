import React from "react";
import "../../styles/contactus.css";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-12 contact-top">
            <h1>Contact Us</h1>
            <p>
              "We’re here to assist you. Fill out the form below, and our team
              will get back to you as soon as possible."
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="contact-section my-4 py-4    ">
        <div className="container   py-4">
          <div className="row contact-left  py-4">
            {/* Get in touch */}
            <div className="col-md-6">
              <h2>Get In Touch</h2>
              <p>
                "We’re here to make things easier for you. Reach out to us by
                filling out the form, and we’ll respond as quickly as possible
                or you can call us at given number.
              </p>
              <div className="address-section my-3">
                <div className="icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="address-section-inner">
                  <h3>Address</h3>
                  <p>
                    Timeoffice Softech Pvt. Ltd. B205, Anannya Complex, Near
                    Akshar Chowk O.P. Road, Vadodara-390020
                  </p>
                </div>
              </div>
              <div className="address-section my-3">
                <div className="icon">
                  <i class="fa-solid fa-phone"></i>
                </div>

                <div className="address-section-inner ">
                  <h3>Phone Number</h3>
                  <p> 080-6901 0000</p>
                </div>
              </div>
              <div className="address-section my-3">
                <div className="icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>

                <div className="address-section-inner">
                  <h3>Email Address</h3>
                  <p> info@chiptronics.co.in</p>
                </div>
              </div>
              <hr />
              <div className="follow-us my-4">
                <p>Follow Us:</p>
                <div className="social-media">
                  <div className="icon">
                    <a href="">
                      <i
                        class="fa-brands fa-facebook-f"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="">
                      <i
                        class="fa-brands fa-twitter"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="">
                      <i
                        class="fa-brands fa-instagram"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="">
                      <i
                        class="fa-brands fa-youtube"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Handling Form */}
            <div className="col-md-6">
              <div className="outer-form">
                <form action="" className="inner-form">
                  <h1 className="my-2">Send a Message</h1>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="E-mail Address" />
                  <input type="text" placeholder="Message" />
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
