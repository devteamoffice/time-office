import React, { useEffect, useState } from "react";
import "../../styles/contactus.css";
import { toast } from "react-toastify";
import axios from "axios"; // Import Axios
import { API_URL } from "../../constants";

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(null); // Local state for error handling

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Add this for debugging
    try {
      const response = await axios.post(`${API_URL}/contact/add`, formData);
      if (response.status === 200) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("There was an error sending your message.");
      setError(error?.response?.data?.errors || "An unexpected error occurred");
      console.error(error);
    }
  };

  useEffect(() => {
    if (error) {
      // Display error as toast notifications
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <div className="col-md-12 contact-top">
        <h1>CONTACT US</h1>
      </div>

      <div className="contact-section">
        <div className="container py-4">
          <div className="row contact-left py-4">
            {/* Get in touch */}
            <div className="col-md-6">
              <h2>Get In Touch</h2>
              <p>
                "We’re here to make things easier for you. Reach out to us by
                filling out the form, and we’ll respond as quickly as possible
                or you can call us at the given number."
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
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="E-mail Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <button type="submit">Submit</button>
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
