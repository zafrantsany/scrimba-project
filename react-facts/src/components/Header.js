import React from "react";
import Icon from "./reactjs-icon.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img classname="icon" src={Icon} alt="React Logo" />
          <div className="icon-title">
            <h2>ReactFacts</h2>
          </div>
        </div>
        <div className="title">
          <h4>React Course - Project 1</h4>
        </div>
      </nav>
    </header>
  );
}
