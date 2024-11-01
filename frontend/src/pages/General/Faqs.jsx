import React from "react";

const Faqs = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="card overflow-hidden"
              style={{ background: "url(assets/images/small/img-2.jpg)" }}
            >
              <div className="position-absolute top-0 end-0 bottom-0 start-0 bg-dark opacity-75"></div>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-7 text-center">
                    <h3 className="text-white">Frequently Asked Questions</h3>
                    <p className="text-white-50">
                      We're here to help with any questions you have about
                      plans, pricing, and supported features.
                    </p>

                    <div className="search-bar">
                      <span>
                        <i className="bx bx-search-alt"></i>
                      </span>
                      <input
                        type="search"
                        className="form-control rounded-pill bg- border-0"
                        id="search"
                        placeholder="Search ..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row g-xl-4">
                  <div className="col-xl-6">
                    <h4 className="mb-3 fw-semibold fs-16">General</h4>

                    <div className="accordion">
                      {/* Post-purchase support FAQ */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                            aria-expanded="true"
                            aria-controls="faq1"
                          >
                            How is the post-purchase support?
                          </button>
                        </h2>
                        <div
                          id="faq1"
                          className="accordion-collapse collapse show"
                          aria-labelledby="faq1"
                        >
                          <div className="accordion-body">
                            We provide remote desktop support after purchase for
                            both hardware and software.
                          </div>
                        </div>
                      </div>

                      {/* Direct API access FAQ */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq2"
                            aria-expanded="false"
                            aria-controls="faq2"
                          >
                            Can we get direct API access from the device?
                          </button>
                        </h2>
                        <div
                          id="faq2"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq2"
                        >
                          <div className="accordion-body">
                            The device does not support API directly, but using
                            the Team Office cloud attendance platform, you can
                            get punch data using API.
                          </div>
                        </div>
                      </div>

                      {/* Cloud attendance subscription charge FAQ */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq3"
                            aria-expanded="false"
                            aria-controls="faq3"
                          >
                            Is there a subscription charge for the cloud
                            attendance platform?
                          </button>
                        </h2>
                        <div
                          id="faq3"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq3"
                        >
                          <div className="accordion-body">
                            Yes, there is a subscription charge for the Team
                            Office cloud attendance platform. Charges vary
                            depending on the features and number of users.
                            Contact our sales team for detailed pricing tailored
                            to your needs.
                          </div>
                        </div>
                      </div>

                      {/* Mobile application inclusion FAQ */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq4"
                            aria-expanded="false"
                            aria-controls="faq4"
                          >
                            Is the mobile application also included in that?
                          </button>
                        </h2>
                        <div
                          id="faq4"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq4"
                        >
                          <div className="accordion-body">
                            Yes, the Team Office cloud attendance platform
                            subscription includes access to the mobile
                            application. It allows employees to track their
                            attendance, view punch data, and access other
                            relevant features.
                          </div>
                        </div>
                      </div>

                      {/* Offline desktop software FAQ */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq5"
                            aria-expanded="false"
                            aria-controls="faq5"
                          >
                            Is the offline desktop software free?
                          </button>
                        </h2>
                        <div
                          id="faq5"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq5"
                        >
                          <div className="accordion-body">
                            Yes, the offline desktop software is free with the
                            purchase of the device. However, after the first
                            year, an Annual Maintenance Contract (AMC) charge
                            applies for continued technical support.
                          </div>
                        </div>
                      </div>

                      {/* Mac compatibility FAQ */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq6"
                            aria-expanded="false"
                            aria-controls="faq6"
                          >
                            Will the software work on a Mac PC?
                          </button>
                        </h2>
                        <div
                          id="faq6"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq6"
                        >
                          <div className="accordion-body">
                            The offline desktop software is designed for Windows
                            and is not compatible with Mac. However, the Team
                            Office cloud attendance platform can be accessed
                            from any device, including Mac, via a web browser.
                          </div>
                        </div>
                      </div>

                      {/* Centralized data access FAQ */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq7"
                            aria-expanded="false"
                            aria-controls="faq7"
                          >
                            Can we view data from all locations in one place?
                          </button>
                        </h2>
                        <div
                          id="faq7"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq7"
                        >
                          <div className="accordion-body">
                            Yes, using the Team Office cloud attendance
                            platform, you can view data from all locations in
                            one place, enabling centralized access to punch data
                            and attendance records across multiple locations.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other FAQ sections can be added here as needed */}
                </div>

                <div className="row my-5">
                  <div className="col-12 text-center">
                    <h4>Can't find a question?</h4>
                    <button type="button" className="btn btn-success mt-2">
                      <i className="bx bx-envelope me-1"></i> Email us your
                      question
                    </button>
                    <button type="button" className="btn btn-info mt-2 ms-1">
                      <i className="bx bxl-twitter me-1"></i> Send us a tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
