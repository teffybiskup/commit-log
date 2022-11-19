import React, { useState, useEffect } from 'react';
import { IBranch } from '../common/types';
import { getAllBranches } from "../services/SideBar/BranchTreeViewService";
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

    const renderBranchTreeItem = (list: string[]) => {
        return <ul>
            {list.map((branch) => (
                <li title={branch}>{branch}</li>
            ))}
        </ul>
    }

    return (
        <div className="tree-view">
            {branchList.map((branch) => (
                <>
                    <h4 title={branch.name} className="branch-title">{branch.name} Branches</h4>
                    {(branch.list instanceof Array) ? (
                        <>{renderBranchTreeItem(branch.list)}</>
                    ) : (
                        <ul>
                            <li title={branch.list.name}>{branch.list.name}</li>
                            {renderBranchTreeItem(branch.list?.list as string[])}
                        </ul>
                    )}
                </>
            ))}
        </div>
    );
};

export default BranchTreeView;