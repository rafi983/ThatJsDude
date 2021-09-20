import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="w-75 " />
      <h1>© thatJSDude 2021, a codinism initiative.</h1>
      <p className="text-center">
        Hosted by{" "}
        <a href="/#" className="text-decoration-none footer-host">
          XeonBD
        </a>
      </p>
    </div>
  );
};

export default Footer;
