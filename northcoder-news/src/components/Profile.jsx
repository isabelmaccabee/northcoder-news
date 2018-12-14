import React from "react";
import "../css/Profile.css";

const Profile = ({ user }) => {
  const { username, user_id, name } = user;
  return (
    <div className="userProfile">
      <h2>{name}'s Profile</h2>
      <table className="infoTable">
        <tbody>
          <tr>
            <td>Your username</td>
            <td>: {username}</td>
          </tr>
          <tr>
            <td>Your user ID</td>
            <td>: {user_id}</td>
          </tr>
        </tbody>
      </table>
      <p>Thanks for being a valued user of this site!</p>
    </div>
  );
};

export default Profile;
