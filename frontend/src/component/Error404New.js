import React from "react";
import "../styles/error404.css";
import ProductDetails from "./Product/ProductDetails";
const Error404New = () => {
  return (
    <>
      <div className="main404page">
        <div className="container404">
          <h1>4 4</h1>
          <div className="message">
            <p>Page not found</p>
          </div>
        </div>

        <p className="my-2 description404">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a href="/" className="btn error-btn my-2">
          Go Home →
        </a>
      </div>
    </>
  );
};

export default Error404New;
