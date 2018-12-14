import React from "react";
import "../css/PageNotFound.css";

const PageNotFound = props => {
  const {
    location: { state }
  } = props;
  return (
    <div className="PageNotFound">
      <h2>Oops!</h2>
      <p>{state.errMsg}</p>
      <p />
    </div>
  );
};

export default PageNotFound;
