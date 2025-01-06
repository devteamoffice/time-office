import React from "react";
import navRoutes from "../../assets/data/navRoutes";
import { MdDoubleArrow } from "react-icons/md";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <div className="main-nav">
      <div className="logo-box">
        <a href="/" className="logo-dark">
          <img src={logo} className="logo-sm" alt="logo sm" />
          <img src={logo} className="logo-lg" alt="logo dark" />
        </a>

        <a href="/" className="logo-light">
          <img src={logo} className="logo-sm" alt="logo sm" />
          <img src={logo} className="logo-lg" alt="logo light" />
        </a>
      </div>
      <button
        type="button"
        className="button-sm-hover"
        aria-label="Show Full Sidebar"
      >
        <MdDoubleArrow className="button-sm-hover-icon" />
      </button>
      <div className="scrollbar" data-simplebar>
        <ul className="navbar-nav" id="navbar-nav">
          {navRoutes.map((section, index) => (
            <React.Fragment key={index}>
              <li className="menu-title">{section.title}</li>
              {section.items &&
                section.items.map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <a className="nav-link" href={item.link}>
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-text"> {item.text} </span>
                    </a>
                  </li>
                ))}
              {section.submenu && (
                <li className="nav-item">
                  <a
                    className="nav-link menu-arrow"
                    href={`#sidebar${section.title}`}
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls={`#sidebar${section.title}`}
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
