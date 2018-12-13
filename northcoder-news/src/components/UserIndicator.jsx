import React from "react";
import "../css/UserIndicator.css";

const UserIndicator = ({ user }) => {
  const { username, avatar_url } = user;
  return (
    <div className="userInd headerBar">
      <p>You are signed in as {username}</p>
      <img
        src={`${avatar_url}`}
        alt={`avatar for user ${username}`}
        className="userAvatar"
      />
    </div>
  );
};

export default UserIndicator;
