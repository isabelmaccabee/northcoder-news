import React from "react";
import "../css/UserIndicator.css";
import { Link } from "@reach/router";

const UserIndicator = ({ user }) => {
  const { username, avatar_url } = user;
  return (
    <div className="userInd headerBar">
      <p>You are signed in as {username}</p>
      <Link to="/profile">
        <img
          src={`${avatar_url}`}
          alt={`avatar for user ${username}`}
          className="userAvatar"
        />
      </Link>
    </div>
  );
};

export default UserIndicator;
