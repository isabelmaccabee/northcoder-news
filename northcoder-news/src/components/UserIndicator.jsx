import React from "react";

const UserIndicator = ({ user }) => {
  const { username, avatar_url } = user;
  return (
    <div className="userInd">
      <p>You are signed in as {username}</p>
      <img src={`${avatar_url}`} alt={`avatar for user ${username}`} />
    </div>
  );
};

export default UserIndicator;
