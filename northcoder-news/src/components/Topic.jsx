import React from "react";
import Articles from "./Articles";

const Topic = ({ topic }) => {
  return (
    <div>
      <Articles topic={topic} />
    </div>
  );
};

export default Topic;
