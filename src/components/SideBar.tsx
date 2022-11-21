import React from "react";
import BranchTreeView from "./BranchTreeView";
import "../styles/SideBar.css";

const Sidebar = () => {
  return (
    <div className="menu">
      <span className="title" title="organization/repository">
        organization/repository
      </span>
      <BranchTreeView />
    </div>
  );
};

export default Sidebar;
