import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Image/Logo.png";
import "./navbar.css";

const Navbar = () => {
  const scrolltop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={scrolltop}
                >
                  Home
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to={"/product"}
                >
                  Products
                </Link>
              </li> */}

              <li class="nav-item dropdown">
                <Link
                  to={"/product"}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={scrolltop}
                >
                  Product
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" href="#">
                      Attendance and Access Control Systems
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Door Locks and Controllers
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Barcode Scanners
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Switches for Access Control
                    </a>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Readers
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/product"
                  onClick={scrolltop}
                >
                  Our Store
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/about"
                  onClick={scrolltop}
                >
                  About us
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/contact"
                  onClick={scrolltop}
                >
                  Contact us
                </Link>
              </li>
            </ul>
            {/* <div class="d-flex btn-group ">
              <Link>
                <i
                  className="bx bxs-cart"
                  style={{ fontSize: "24px", color: "#000" }}
                ></i>
              </Link>
            </div> */}
            <div class="d-flex btn-group ms-2">
              <button className=" btn1">Login</button>
              <button className=" btn2 ms-2">Call Now</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
