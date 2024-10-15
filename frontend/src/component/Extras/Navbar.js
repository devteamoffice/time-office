import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/team_office_logo_13.png";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/product"}
                >
                  Products
                </Link>
              </li> */}

              <li className="nav-item dropdown">
                <Link
                  to={"/products"}
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Attendance and Access Control Systems
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Door Locks and Controllers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Barcode Scanners
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Switches for Access Control
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Readers
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Our Store
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/aboutus"
                >
                  About us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
            {/* <div className="d-flex btn-group ">
              <Link>
                <i
                  classNameName="bx bxs-cart"
                  style={{ fontSize: "24px", color: "#000" }}
                ></i>
              </Link>
            </div> */}
            <div className="d-flex btn-group ms-2">
              <button className=" btn1">
                <Link to={"/signin"}>Login</Link>
              </button>
              <button className=" btn2 ms-2">Call Now</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
