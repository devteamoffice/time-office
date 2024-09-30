import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signupChange,
  signUp,
  subscribeChange,
} from "../containers/Signup/actions";
import logo from "../assets/images/team_office_logo_13.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const signupFormData = useSelector((state) => state.signup.signupFormData); // Access form data from Redux
  const isSubmitting = useSelector((state) => state.signup.isSubmitting); // Access loading state from Redux
  const formErrors = useSelector((state) => state.signup.formErrors); // Access form errors if any

  // Form field change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(signupChange(name, value)); // Dispatch signupChange action
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp()); // Dispatch signUp action to handle form submission
  };

  return (
    <div className="d-flex flex-column h-100 p-3">
      <div className="d-flex flex-column flex-grow-1">
        <div className="row h-100">
          <div className="col-xxl-7">
            <div className="row justify-content-center h-100">
              <div className="col-lg-6 py-lg-5">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="auth-logo mb-4">
                    <a href="index.html" className="logo-dark">
                      <img src={logo} height="24" alt="logo dark" />
                    </a>
                    <a href="index.html" className="logo-light">
                      <img src={logo} height="24" alt="logo light" />
                    </a>
                  </div>

                  <h2 className="fw-bold fs-24">Sign Up</h2>

                  <p className="text-muted mt-1 mb-4">
                    New to our platform? Sign up now! It only takes a minute
                  </p>

                  <div>
                    <form
                      className="authentication-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="firstName">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              className="form-control"
                              placeholder="Enter your first name"
                              value={signupFormData.firstName || ""}
                              onChange={handleInputChange}
                            />
                            {formErrors.firstName && (
                              <p className="text-danger">
                                {formErrors.firstName}
                              </p>
                            )}
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="lastName">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              className="form-control"
                              placeholder="Enter your last name"
                              value={signupFormData.lastName || ""}
                              onChange={handleInputChange}
                            />
                            {formErrors.lastName && (
                              <p className="text-danger">
                                {formErrors.lastName}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email"
                          value={signupFormData.email || ""}
                          onChange={handleInputChange}
                        />
                        {formErrors.email && (
                          <p className="text-danger">{formErrors.email}</p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter your password"
                          value={signupFormData.password || ""}
                          onChange={handleInputChange}
                        />
                        {formErrors.password && (
                          <p className="text-danger">{formErrors.password}</p>
                        )}
                      </div>

                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="subscribe"
                            checked={signupFormData.subscribe || false}
                            onChange={() => dispatch(subscribeChange())}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="subscribe"
                          >
                            I accept Terms and Conditions
                          </label>
                        </div>
                      </div>

                      <div className="mb-1 text-center d-grid">
                        <button
                          className="btn btn-soft-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Signing Up..." : "Sign Up"}
                        </button>
                      </div>
                    </form>

                    <p className="mt-3 fw-semibold no-span">OR sign with</p>

                    <div className="d-grid gap-2">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-soft-dark"
                      >
                        <i className="bx bxl-google fs-20 me-1"></i> Sign Up
                        with Google
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-soft-primary"
                      >
                        <i className="bx bxl-facebook fs-20 me-1"></i> Sign Up
                        with Facebook
                      </a>
                    </div>
                  </div>

                  <p className="mt-auto text-danger text-center">
                    I already have an account{" "}
                    <a
                      href="auth-signin.html"
                      className="text-dark fw-bold ms-1"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 d-none d-xxl-flex">
            <div className="card h-100 mb-0 overflow-hidden">
              <div className="d-flex flex-column h-100">
                <img
                  src="assets/images/small/img-10.jpg"
                  alt=""
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
