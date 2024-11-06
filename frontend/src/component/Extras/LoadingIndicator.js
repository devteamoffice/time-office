import React from "react";

const LoadingIndicator = (props) => {
  const { inline, backdrop } = props;

  return (
    <div class="spinner-border text-primary me-3" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

LoadingIndicator.defaultProps = {
  inline: false,
  backdrop: false,
};

export default LoadingIndicator;
