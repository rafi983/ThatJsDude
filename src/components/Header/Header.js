import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid header-content ">
      <h1 className="workshop-heading w-75">
        Exclusive React Workshop for beginners
      </h1>
      <p>
        Once in a year opportunity to learn and build your{" "}
        <span>first React app</span>
      </p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  );
};

export default Header;
