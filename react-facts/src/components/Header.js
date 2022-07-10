import React from "react";
import Icon from "./reactjs-icon.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img classname="nav--icon" src={Icon} alt="React Logo" />
        <h2 className="nav--logo_text">ReactFacts</h2>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </header>
  );
}
