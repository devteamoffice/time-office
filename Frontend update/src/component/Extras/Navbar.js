import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/team_office_logo_13.png";
import "../../styles/navbar.css";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search input visibility
  };

  const handleClick = () => {
    // alert("Click Working");
    window.scrollTo(0, 0);
  };

  // Hide search bar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsSearchVisible(false); // Always hide the search bar on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <div>
      <nav
        id="nav"
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" />
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
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
                    <Link className="dropdown-item" href="#">
                      Switches for Access Control
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Readers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      AMC
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Elevator Control System
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                  onClick={handleClick}
                >
                  Our Store
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/aboutus"
                  onClick={handleClick}
                >
                  About us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                  onClick={handleClick}
                >
                  Contact us
                </Link>
              </li>
            </ul>

            {/* upar wala */}
            <div className="SearchItem">
              <button className="searchHideIcon" onClick={handleSearch}>
                <i className="fas fa-search"></i>
                {/* niche wala */}
                {isSearchVisible && (
                  <div className="showSearch">
                    <input type="text" />
                    <button className="showsearchIcon">Search</button>
                  </div>
                )}
              </button>
            </div>
            <form class="d-flex searchfrom">
              <input
                class="mobileInput form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btnMobile btn-outline-success my-2" type="submit">
                Search
              </button>
            </form>

            <div className="d-flex btn-group ms-2">
              <button className="btn1">
                <Link to={"/signin"}>Login</Link>
              </button>
              <button className="btn2 ms-2">Call Now</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
