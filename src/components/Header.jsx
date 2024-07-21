import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShopify } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-succes bg-success fixed-top navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-3 " to="/">
          <FaShopify />
          Context Store
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">HomePage</li>
                <li className="nav-item">
                  <NavLink className={"nav-link"}>
                    Basket
                    <span className="badge bg-warning">0</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
