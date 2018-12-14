import Articles from "./Articles";
import "../App.css";
import React from "react";

const Home = ({ page }) => {
  return (
    <div>
      <h2>Home</h2>
      <Articles topic={false} page={page} />
    </div>
  );
};

export default Home;
