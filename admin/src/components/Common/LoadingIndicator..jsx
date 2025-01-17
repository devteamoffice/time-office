import React from "react";
import PropTypes from "prop-types";
import "./loading.css"; // Optional: Add custom styling if needed.

const LoadingIndicator = ({ inline, backdrop }) => {
  if (inline) {
    return (
      <div className="d-flex justify-content-center align-items-center my-2">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (backdrop) {
    return (
      <div className="loading-backdrop">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return null;
};

LoadingIndicator.propTypes = {
  inline: PropTypes.bool,
  backdrop: PropTypes.bool,
};

LoadingIndicator.defaultProps = {
  inline: false,
  backdrop: false,
};

export default LoadingIndicator;
