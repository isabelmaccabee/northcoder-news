import React from "react";
import Login from "./Login";
import Header from "./Header";

const Auth = ({ user, children, setUser }) => {
  if (user) return children;
  else
    return (
      <div>
        <Header />
        <Login setUser={setUser} />
      </div>
    );
};

export default Auth;
