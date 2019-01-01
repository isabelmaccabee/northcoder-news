import React from "react";
import "../css/Header.css";

const Header = ({ auth }) => {
  return (
    <div className={auth ? "header authHeader" : "header"}>
      <h1>
        <span>North</span>
        <br />
        <span>Coder</span>
        <br />
        <span>News</span>
      </h1>
    </div>
  );
};

export default Header;
