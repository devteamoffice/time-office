// components/LoginForm.js
import React from "react";
import "./style.css";

const LoginForm = ({ toggleForms }) => {
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            <i className="fa-brands fa-google-plus-g"></i>
          </a>
          <a href="#" className="icon">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="icon">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" className="icon">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your email for password</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forget Your Password?</a>
        <button type="button">Sign In</button>
      </form>
      <div className="toggle-panel">
        <h1>Hello, Friend!</h1>
        <p>
          Register with your personal details to use all of the site's features
        </p>
        <button className="hidden" onClick={toggleForms}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
