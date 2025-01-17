import React from "react";
import { Link } from "react-router-dom";
import navRoutes from "../../assets/data/navRoutes";
import { MdDoubleArrow } from "react-icons/md";
import logo from "../../assets/images/logo/multi_color.png";

const MainNav = ({ userId }) => {
  return (
    <div className="main-nav sidebar-open">
      {/* Logo Section */}
      <div className="logo-box">
        <a href="/" className="logo-dark">
          <img src={logo} className="logo-sm" alt="Small Logo" />
          <img src={logo} className="logo-lg" alt="Large Logo" />
        </a>
        <a href="/" className="logo-light">
          <img src={logo} className="logo-sm" alt="Small Light Logo" />
          <img src={logo} className="logo-lg" alt="Large Light Logo" />
        </a>
      </div>

      {/* Sidebar Toggle Button (Optional - Can be removed if unnecessary) */}
      {/* <button
        type="button"
        className="button-sm-hover"
        aria-label="Toggle Sidebar"
      >
        <MdDoubleArrow className="button-sm-hover-icon rotated" />
      </button> */}

      {/* Navigation Links */}
      <div className="scrollbar" data-simplebar>
        <ul className="navbar-nav" id="navbar-nav">
          {navRoutes.map((section, index) => (
            <React.Fragment key={index}>
              {/* Section Title */}
              {section.title && <li className="menu-title">{section.title}</li>}

              {/* Section Items */}
              {section.items &&
                section.items.map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    {typeof item.link === "function" ? (
                      <Link className="nav-link" to={item.link(userId)}>
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-text">{item.text}</span>
                      </Link>
                    ) : (
                      <a className="nav-link" href={item.link}>
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-text">{item.text}</span>
                      </a>
                    )}
                  </li>
                ))}

              {/* Submenu Handling */}
              {section.submenu && (
                <li className="nav-item">
                  <a
                    className="nav-link menu-arrow"
                    href={`#sidebar${section.title}`}
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls={`sidebar${section.title}`}
                  >
                    <span className="nav-icon">{section.icon}</span>
                    <span className="nav-text">{section.title}</span>
                  </a>
                  <div className="collapse" id={`sidebar${section.title}`}>
                    <ul className="nav sub-navbar-nav">
                      {section.submenu.map((subitem, idx) => (
                        <li className="sub-nav-item" key={idx}>
                          <Link className="sub-nav-link" to={subitem.link}>
                            {subitem.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
