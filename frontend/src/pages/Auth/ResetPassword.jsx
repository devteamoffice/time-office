import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../constants"; // Ensure you have your API URL constant
import img from "../../assets/images/img-10.jpg";
import logo from "../../assets/images/Logo.png";
const ResetPassword = (props) => {
  const { resetPassword } = props;
  const [resetFormData, setResetFormData] = useState({
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResetFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple validation
    if (!resetFormData.email) {
      setFormErrors({ email: "Email is required!" });
      toast.error("Email is required!");
      return;
    }

    setFormErrors({}); // Clear errors

    try {
      const response = await axios.post(`${API_URL}/auth/reset-password`, {
        email: resetFormData.email,
      });

      const data = response.data;

      if (data.success) {
        toast.success("Password reset instructions sent to your email.");
        resetPassword(); // Call the passed `resetPassword` function (or handle the redirection here)
      } else {
        toast.error(
          data.message || "Failed to reset password. Please try again."
        );
      }
    } catch (error) {
      toast.error("An error occurred during password reset. Please try again.");
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
                  <div className="auth-logo mb-4">
                    <a href="/" className="logo-dark">
                      <img src={logo} height="24" alt="logo dark" />
                    </a>

                    <a href="/" className="logo-light">
                      <img src={logo} height="24" alt="logo light" />
                    </a>
                  </div>

                  <h2 className="fw-bold fs-24">Reset Password</h2>

                  <p className="text-muted mt-1 mb-4">
                    Enter your email address and we'll send you an email with
                    instructions to reset your password.
                  </p>

                  <div>
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
                          value={resetFormData.email}
                          onChange={handleInputChange}
                        />
                        {formErrors.email && (
                          <small className="text-danger">
                            {formErrors.email}
                          </small>
                        )}
                      </div>
                      <div className="mb-1 text-center d-grid">
                        <button className="btn btn-primary" type="submit">
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="mt-5 text-danger text-center">
                    Back to{" "}
                    <a href="/login" className="text-dark fw-bold ms-1">
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
                <img src={img} alt="" className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
