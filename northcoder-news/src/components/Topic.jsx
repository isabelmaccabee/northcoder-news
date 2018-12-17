import React from "react";
import Articles from "./Articles";
import * as utils from "../utils/index";

const Topic = ({ topic, page, topics }) => {
  return (
    <>
      <h2>{utils.capitaliseFirst(topic)}</h2>
      <p>All of the articles related to {topic}.</p>
      {topics.reduce((acc, oneTopic) => {
        if (oneTopic.slug === topic)
          acc = <p>Description: {oneTopic.description}</p>;
        return acc;
      }, "")}
      <Articles topic={topic} page={page} />
    </>
  );
};

export default Topic;
