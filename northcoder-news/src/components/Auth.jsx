import React from "react";
import Login from "./Login";
import Header from "./Header";
import "../css/LoginPage.css";

const Auth = ({ user, children, setUser }) => {
  if (user) return children;
  else
    return (
      <div className="loginPage">
        <Header />
        <Login setUser={setUser} />
      </div>
    );
};

export default Auth;
