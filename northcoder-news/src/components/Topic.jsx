import React from "react";
import Articles from "./Articles";
import * as utils from "../utils/index";

const Topic = ({ topic, page }) => {
  return (
    <>
      <h2>{utils.capitaliseFirst(topic)}</h2>
      <Articles topic={topic} page={page} />
    </>
  );
};

export default Topic;
