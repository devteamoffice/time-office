// components/LoginForm.js
import React, { useState, useContext } from "react";
import logo from "../../assets/images/logo-dark.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingIndicator from "../Common/LoadingIndicator.";
import { Alert } from "react-bootstrap";
import { API_URL } from "../../constants";
import { AuthContext } from "../../context/Socket/AuthContext"; // Ensure correct import
const LoginForm = ({ toggleForms }) => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Accessing login from AuthContext

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
      const response = await axios.post(
        `${API_URL}/admin/login`,
        loginFormData
      ); // Update with your API URL
      const data = response.data;

      if (data.success) {
        // Successfully logged in
        setLoginSuccess(true);
        login(data.token); // Call login with the token returned from the server
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
    <div class="col-xxl-7">
      <div class="row justify-content-center h-100">
        <div class="col-lg-6 py-lg-5">
          <div class="d-flex flex-column h-100 justify-content-center">
            <h2 class="fw-bold fs-24">Sign In</h2>

            <p class="text-muted mt-1 mb-4">
              Enter your email address and password to access admin panel. Only
              Admin and Users with permissions are allowed.
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
            <div class="mb-5">
              <form onSubmit={handleSubmit} class="authentication-form">
                <div class="mb-3">
                  <label class="form-label" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control bg-"
                    placeholder="Enter your email"
                    value={loginFormData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  {formErrors.email && (
                    <small className="text-danger">{formErrors.email}</small>
                  )}
                </div>
                <div class="mb-3">
                  <a
                    href="auth-password.html"
                    class="float-end text-muted text-unline-dashed ms-1"
                  >
                    Reset password
                  </a>
                  <label class="form-label" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter your password"
                    value={loginFormData.password}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  {formErrors.password && (
                    <small className="text-danger">{formErrors.password}</small>
                  )}
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkbox-signin"
                    />
                    <label class="form-check-label" for="checkbox-signin">
                      Remember me
                    </label>
                  </div>
                </div>

                <div class="mb-1 text-center d-grid">
                  <button
                    class="btn btn-soft-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <LoadingIndicator /> : "Sign In"}
                  </button>
                </div>
              </form>

              {/* <p class="mt-3 fw-semibold no-span">OR sign with</p>

              <div class="d-grid gap-2">
                <a href="javascript:void(0);" class="btn btn-soft-dark">
                  <i class="bx bxl-google fs-20 me-1"></i> Sign in with Google
                </a>
                <a href="javascript:void(0);" class="btn btn-soft-primary">
                  <i class="bx bxl-facebook fs-20 me-1"></i> Sign in with
                  Facebook
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
