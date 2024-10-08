// components/AuthForm.js
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import "./style.css";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForms = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container" id="container">
      {isSignUp ? (
        <SignUpForm toggleForms={toggleForms} />
      ) : (
        <LoginForm toggleForms={toggleForms} />
      )}
    </div>
  );
};

export default AuthForm;
