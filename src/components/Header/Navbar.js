import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  jsdude-nav">
        <div className="container">
          <a className="js-heading" href="/#">
            ThatJsDude
          </a>
          <button className="btn btn-success">Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
