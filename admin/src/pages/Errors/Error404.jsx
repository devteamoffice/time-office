import React from "react";
import logo from "../../assets/images/logo/color.png";
import error from "../../assets/images/404-error.png";
import img from "../../assets/images/img-10.jpg";
const Error404 = () => {
  return (
    <div class="d-flex flex-column h-100 p-3">
      <div class="d-flex flex-column flex-grow-1">
        <div class="row h-100">
          <div class="col-xxl-7">
            <div class="row align-items-center justify-content-center h-100">
              <div class="col-lg-10">
                <div class="auth-logo mb-3 text-center">
                  <a href="/" class="logo-dark">
                    <img src={logo} height="24" alt="logo dark" />
                  </a>
                </div>
                <div class="mx-auto text-center">
                  <img src={error} alt="" class="img-fluid my-3" />
                </div>
                <h2 class="fw-bold text-center lh-base">
                  Ooops! The Page You're Looking For Was Not Found
                </h2>
                <p class="text-muted text-center mt-1 mb-4">
                  Sorry, we couldn't find the page you were looking for. We
                  suggest that you return to main sections
                </p>
                <div class="text-center">
                  <a href="/" class="btn btn-primary">
                    Back To Home
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xxl-5 d-none d-xxl-flex">
            <div class="card h-100 mb-0 overflow-hidden">
              <div class="d-flex flex-column h-100">
                <img src={img} alt="" class="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
