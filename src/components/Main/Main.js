import React from "react";
import "./main.css";
import Sidebar from "./Sidebar";
import Topics from "./Topics";

const Main = () => {
  return (
    <div>
      <div className="allContents">
        <Topics />
        <Sidebar />
      </div>
    </div>
  );
};

export default Main;
