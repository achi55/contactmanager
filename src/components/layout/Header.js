import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div class="container">
        <a href="/" className="navbar-brand">
          {props.Branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  Branding: "My App"
};

export default Header;
