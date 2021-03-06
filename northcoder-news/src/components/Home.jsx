import Articles from "./Articles";
import "../App.css";
import React from "react";

const Home = ({ page, resetPage }) => {
  return (
    <div>
      <h2>Home</h2>
      <p>
        Welcome to Northcoder News! Have a peruse of our latest articles on a
        variety of topics, or better yet - write an article yourself!
      </p>
      <Articles page={page} resetPage={resetPage} topic={false} />
    </div>
  );
};

export default Home;
