import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupChange, subscribeChange } from "../../containers/Signup/actions";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/team_office_logo_13.png";
import img from "../../assets/images/access-control-solution.jpg";
import TermsAndConditionsModal from "../../component/Modals/Terms&Condition";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/Socket/AuthContext";
import axios from "axios";
import { API_URL } from "../../constants";

const SignUp = () => {
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupFormData = useSelector((state) => state.signup.signupFormData);
  const isSubmitting = useSelector((state) => state.signup.isSubmitting);
  const formErrors = useSelector((state) => state.signup.formErrors);
  const isSubscribed = useSelector((state) => state.signup.isSubscribed);

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(signupChange(name, value));
  };

  const handleCheckboxChange = () => {
    dispatch(subscribeChange());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast.error(
        "You must accept the Terms and Conditions before signing up."
      );
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        name: signupFormData.name,
        username: signupFormData.username, // Include username in request
        email: signupFormData.email,
        password: signupFormData.password,
        isSubscribed,
      });

      if (response.status === 200) {
        login();
        navigate("/");
        toast.success("Successfully signed up!");
      } else {
        toast.error(response.data.message || "Sign-up failed.");
      }
    } catch (error) {
      toast.error("An error occurred during sign-up. Please try again.");
      console.error("Sign-up error:", error);
    } finally {
      setLoading(false);
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
                  <h2 className="fw-bold fs-24">Sign Up</h2>

                  <p className="text-muted mt-1 mb-4">
                    New to our platform? Sign up now! It only takes a minute.
                  </p>

                  <div className="mb-5">
                    <form
                      className="authentication-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="name">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              placeholder="Enter your name"
                              value={signupFormData.name || ""}
                              onChange={handleInputChange}
                            />
                            {formErrors.name && (
                              <p className="text-danger">{formErrors.name}</p>
                            )}
                          </div>

                          <div className="col-md-6">
                            <label className="form-label" htmlFor="username">
                              Username
                            </label>
                            <input
                              type="text"
                              id="username"
                              name="username"
                              className="form-control"
                              placeholder="Choose a username"
                              value={signupFormData.username || ""}
                              onChange={handleInputChange}
                            />
                            {formErrors.username && (
                              <p className="text-danger">
                                {formErrors.username}
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
                        <div className="input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={signupFormData.password || ""}
                            onChange={handleInputChange}
                          />
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                          </button>
                        </div>
                        {formErrors.password && (
                          <p className="text-danger">{formErrors.password}</p>
                        )}
                      </div>

                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="isSubscribed"
                            checked={isSubscribed}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="isSubscribed"
                          >
                            Subscribe to newsletter
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="termsAccepted"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="termsAccepted"
                          >
                            I accept the Terms and Conditions
                          </label>
                        </div>
                      </div>

                      <div className="mb-1 text-center d-grid">
                        <button
                          className="btn btn-soft-primary"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="mt-auto text-danger text-center">
                    I already have an account{" "}
                    <a href="/signin" className="text-dark fw-bold ms-1">
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

export default SignUp;
