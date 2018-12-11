import React from "react";

const UserIndicator = ({ user }) => {
  return (
    <div className="userInd">
      <p>You are signed in as {user}</p>
    </div>
  );
};

export default UserIndicator;
