import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import "../css/Navbar.css";
import * as utils from "../utils/index";

const Navbar = ({ topics }) => {
  return (
    <div className="nav headerBar">
      <Link to="/">Home</Link>
      {topics.map(({ slug }) => {
        return (
          <Link key={slug} to={`${slug}`}>
            {utils.capitaliseFirst(slug)}
          </Link>
        );
      })}
      <Link to="/submit-topic" className="submitNav">
        Submit Topic
      </Link>
      <Link to="/submit-article" className="submitNav">
        Submit Article
      </Link>
    </div>
  );
};

Navbar.propTypes = {
  topics: PropTypes.array
};

export default Navbar;
