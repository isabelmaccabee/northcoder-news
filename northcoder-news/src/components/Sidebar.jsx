import { Router } from "@reach/router";
import React from "react";
import TopTenSidebar from "./TopTenSidebar";
import CommentsSidebar from "./CommentsSidebar";

const Sidebar = ({ user }) => {
  return (
    <Router className="sidebar">
      <TopTenSidebar path="/" />
      <TopTenSidebar path="/:topic" />
      <CommentsSidebar path="/:topic/:article_id" user={user} />
    </Router>
  );
};

export default Sidebar;
