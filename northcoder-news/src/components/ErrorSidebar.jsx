import React from "react";
import { Link } from "@reach/router";
import "../css/ErrorSidebar.css";

const ErrorSidebar = () => {
  return (
    <div className="errorSidebar">
      <p>
        Seems like you've ended up on the wrong page, do you want to go back to:
      </p>
      <Link to="/">Home</Link>
      <Link to="/profile">Your profile</Link>
    </div>
  );
};

export default ErrorSidebar;
