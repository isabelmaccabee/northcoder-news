import React from "react";
import Articles from "./Articles";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Articles topic={false} />
    </div>
  );
};

export default Home;
