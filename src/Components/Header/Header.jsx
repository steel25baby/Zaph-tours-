import React from "react";
import "./Header.css";
import HeaderLogo from "../../assets/Zaph-logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="HeaderNav">
      <div className="HeaderLogo">
        <img src={HeaderLogo} alt="" />
        <h1>Zaph Tours</h1>
      </div>
      <div className="HeaderNavBar">
        <ol className="HeaderNavList">
          <li className="HeaderNavItem">
            <Link to="/">home</Link>
          </li>
          <li className="HeaderNavItem">
            <Link to="/destinations">destinations</Link>
          </li>
          <li className="HeaderNavItem">
            <Link to="/Trips">trips</Link>
          </li>
          <li className="HeaderNavItem">
            <Link to="/Contacts">contacts</Link>
          </li>
        </ol>
      </div>
      <div className="header-ctas">
        <Link className="First-btn" to="/">
          book now
        </Link>
        <Link className="Second-btn" to="/contacts">
          learn more
        </Link>
      </div>
    </section>
  );
};

export default Header;
