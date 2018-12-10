import { Router } from "@reach/router";
import React from "react";
import TopTenSidebar from "./TopTenSidebar";

const Sidebar = () => {
  return (
    <Router className="sidebar">
      <TopTenSidebar path="/" />
    </Router>
  );
};

export default Sidebar;
