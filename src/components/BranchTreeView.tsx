import React, { useState, useEffect } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { FiCircle } from "react-icons/fi";
import { IBranch } from "../types/branch";
import { getAllBranches } from "../services/BranchTreeViewService";
import { COLORS } from "../constants/colors";
import "../styles/BranchTreeView.css";

const BranchTreeView = () => {
  const [branchList, setBranchList] = useState<IBranch[] | []>([]);

  useEffect(() => {
    async function fetchBranchList() {
      const branches = await getAllBranches();
      setBranchList(branches);
    }

    fetchBranchList();
  }, []);

  const renderBranchTreeItems = (list: string[]) => {
    return (
      <ul>
        {list.map((branch, index) => (
          <li key={index} title={branch} data-testid="tree-item">
            <FiCircle
              color={COLORS.itemTreeView}
              style={{ marginRight: 8 }}
              size={8}
            />
            {branch}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="tree-view">
      {branchList.map((branch, index) => (
        <div key={index}>
          <span title={branch.name} className="branch-title">
            {branch.name} branches
          </span>
          {branch.list instanceof Array ? (
            <>{renderBranchTreeItems(branch.list)}</>
          ) : (
            <ul>
              <li title={branch.list.name}>
                <RiArrowDownSFill
                  color={COLORS.itemTreeView}
                  style={{ marginRight: 5 }}
                />
                {branch.list.name}
              </li>
              {renderBranchTreeItems(branch.list?.list as string[])}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default BranchTreeView;
