import React from "react";
import Articles from "./Articles";
import * as utils from "../utils/index";

const Topic = ({ topic }) => {
  return (
    <div>
      <h2>{utils.capitaliseFirst(topic)}</h2>
      <Articles topic={topic} />
    </div>
  );
};

export default Topic;
