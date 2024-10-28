import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/team_office_logo_13.png";
import img from "../../assets/images/access-control-solution.jpg";
import LoadingIndicator from "../../component/Extras/LoadingIndicator";
import { Alert } from "react-bootstrap";
import { API_URL } from "../../constants";
import { AuthContext } from "../../context/Socket/AuthContext";
const SignIn = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!loginFormData.email || !loginFormData.password) {
      setFormErrors({
        email: !loginFormData.email ? "Email is required" : "",
        password: !loginFormData.password ? "Password is required" : "",
      });
      setLoginError("Email and Password are required!");
      return;
    }

    // Clear any previous errors
    setFormErrors({});
    setLoginError("");
    setLoginSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API_URL}/auth/login`, loginFormData); // Update with your API URL
      const data = response.data;

      if (data.success) {
        setLoginSuccess(true);
        login();
        navigate("/"); // Redirect to dashboard or home
      } else {
        setLoginError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setLoginError("An error occurred during login. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex flex-column h-100 p-3">
      <div className="d-flex flex-column flex-grow-1">
        <div className="row h-100">
          <div className="col-xxl-7">
            <div className="row justify-content-center h-100">
              <div className="col-lg-6 py-lg-5">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <h2 className="fw-bold fs-24">Sign In</h2>

                  <p className="text-muted mt-1 mb-4">
                    Enter your email address and password to access the admin
                    panel.
                  </p>

                  {loginError && (
                    <Alert variant="danger" className="text-center">
                      {loginError}
                    </Alert>
                  )}

                  {loginSuccess && (
                    <Alert variant="success" className="text-center">
                      Successfully signed in!
                    </Alert>
                  )}

                  <div className="mb-5">
                    <form
                      onSubmit={handleSubmit}
                      className="authentication-form"
                    >
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
                          value={loginFormData.email}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                        {formErrors.email && (
                          <small className="text-danger">
                            {formErrors.email}
                          </small>
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
                          value={loginFormData.password}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                        {formErrors.password && (
                          <small className="text-danger">
                            {formErrors.password}
                          </small>
                        )}
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkbox-signin"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-signin"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="mb-1 text-center d-grid">
                        <button
                          className="btn btn-soft-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? <LoadingIndicator /> : "Sign In"}
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="text-danger text-center">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-dark fw-bold ms-1">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 d-none d-xxl-flex">
            <div className="card h-100 mb-0 overflow-hidden">
              <div className="d-flex flex-column h-100">
                <img src={img} alt="Access Control" className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
