import React from "react";

const HeaderTop = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex d-none d-lg-block ">
      <div className="container pe-0">
        <div class="col-md-3 header-top-left d-none d-lg-block">
          <div class="header-top-social">
            {/* <span class="social-text text-upper">Follow us on:</span> */}
            <ul class="mb-0 ps-0">
              <li class="list-inline-item">
                <a class="hdr-facebook" href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="hdr-twitter" href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="hdr-instagram" href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="hdr-linkedin" href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="col-md-6 collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <p className="mb-0">FREE SHIPPING THIS WEEK ORDER OVER - $75</p>
        </div>

        <div className="col-md-3 d-flex justify-content-end">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CURRENCY
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                LANGUAGE
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTop;
