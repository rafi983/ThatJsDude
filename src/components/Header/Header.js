import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid header-content ">
      <h1 className="workshop-heading w-75">
        Exclusive React Workshop for beginners!
      </h1>
      <p>
        Once in a year opportunity to learn and build your{" "}
        <a id="react-link" href="https://create-react-app.dev/">
          first React app
        </a>
      </p>
      <button className="btn btn-primary px-3 py-2 learn">Learn More</button>
    </div>
  );
};

export default Header;
