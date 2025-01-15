import React from "react";

const PrivacyPanel = () => {
  return (
    <div>
      <h4>Privacy Settings</h4>
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-danger">Delete Account</button>
        </div>
        <div className="col-md-12 mt-3">
          <button className="btn btn-warning">Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPanel;
