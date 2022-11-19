import React, { useState, useEffect } from 'react';
import { IBranch } from '../types/branch';
import { getAllBranches } from "../services/BranchTreeViewService";
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
            {list.map((branch, index) => (
                <li key={index} title={branch}>{branch}</li>
            ))}
        </ul>
    }

    return (
        <div className="tree-view">
            {branchList.map((branch, index) => (
                <div key={index}>
                    <h4 title={branch.name} className="branch-title">{branch.name} Branches</h4>
                    {(branch.list instanceof Array) ? (
                        <>{renderBranchTreeItem(branch.list)}</>
                    ) : (
                        <ul>
                            <li title={branch.list.name}>{branch.list.name}</li>
                            {renderBranchTreeItem(branch.list?.list as string[])}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BranchTreeView;