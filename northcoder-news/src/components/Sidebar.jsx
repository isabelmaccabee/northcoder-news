import { Router } from "@reach/router";
import React from "react";
import TopTenSidebar from "./TopTenSidebar";
import CommentsSidebar from "./CommentsSidebar";
import ErrorSidebar from "./ErrorSidebar";

const Sidebar = ({ user }) => {
  return (
    // <div className="outerSidebar">
    <>
      <div id="leftBorder" />
      <Router className="sidebar">
        <TopTenSidebar path="/" />
        <TopTenSidebar path="/:topic" />
        <CommentsSidebar path="/:topic/:article_id" user={user} />
        <ErrorSidebar path="/404" />
      </Router>
    </>
    // </div>
  );
};

export default Sidebar;
