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
      <div className="contact-section my-4 py-4">
        <div className="container py-4">
          <div className="row contact-left py-4">
            {/* Get in touch */}
            <div className="col-md-6">
              <h2>Get In Touch</h2>
              <p>
                "We’re here to make things easier for you. Reach out to us by
                filling out the form, and we’ll respond as quickly as possible
                or you can call us at given number."
              </p>
              <div className="address-section my-3">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
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
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="address-section-inner">
                  <h3>Phone Number</h3>
                  <p>080-6901 0000</p>
                </div>
              </div>
              <div className="address-section my-3">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="address-section-inner">
                  <h3>Email Address</h3>
                  <p>info@chiptronics.co.in</p>
                </div>
              </div>
              <hr />
              <div className="follow-us my-4">
                <p>Follow Us:</p>
                <div className="social-media">
                  <div className="icon">
                    <a href="">
                      <i
                        className="fa-brands fa-facebook-f"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="">
                      <i
                        className="fa-brands fa-twitter"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="">
                      <i
                        className="fa-brands fa-instagram"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="">
                      <i
                        className="fa-brands fa-youtube"
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
                <form onSubmit={handleSubmit} className="inner-form">
                  <h1 className="my-2">Send a Message</h1>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={contactFormData.name || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    value={contactFormData.email || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={contactFormData.message || ""}
                    onChange={handleChange}
                  />
                  <button type="submit">Submit</button>
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
