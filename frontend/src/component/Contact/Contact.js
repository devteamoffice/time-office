import React, { useEffect } from "react";
import "../../styles/contactus.css";
import { useDispatch, useSelector } from "react-redux";
import { contactFormChange, contactUs } from "../../containers/Contact/actions"; // Update with the correct path
import { toast } from "react-toastify";

const Contact = () => {
  const dispatch = useDispatch();
  const { contactFormData, errors } = useSelector((state) => state.contact); // Ensure you have this in your Redux store

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(contactFormChange(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactUs());
  };

  useEffect(() => {
    if (errors) {
      errors.forEach((error) => toast.error(error)); // Display errors as toast notifications
    }
  }, [errors]);

  return (
    <>
      {/* <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 aboutBg-image">Contact us</div>
      </div>
    </div> */}
      <div className="col-md-12 contact-top">
        <h1>CONTACT US</h1>
      </div>

      {/* Contact */}
      <div className="contact-section   ">
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

      {/* MAP */}
      <div
        className="col-md-12 contact-map mt-4"
        style={{ position: "relative" }}
      >
        {/* Company Info Overlay */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px 20px",
            zIndex: 10,
            borderRadius: "5px",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h5 style={{ margin: "0" }}>E-Timeoffice Softech Pvt. Ltd.</h5>
          <p style={{ margin: "5px 0" }}>
            B205, Anannya Complex, <br />
            Near Akshar Chowk O.P. Road, <br />
            Vadodara-390020
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=B205,%20Anannya%20Complex,%20Near%20Akshar%20Chowk%20O.P.%20Road,%20Vadodara-390020"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Get Directions
          </a>
        </div>

        {/* Google Map */}
        <iframe
          src="https://maps.google.com/maps?q=B205,%20Anannya%20Complex,%20Near%20Akshar%20Chowk%20O.P.%20Road,%20Vadodara-390020&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          style={{ width: "100%", height: "300px" }}
          title="Company Location"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
