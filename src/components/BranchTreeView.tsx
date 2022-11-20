import React, { useState, useEffect } from 'react';
import { IBranch } from '../types/branch';
import { getAllBranches } from "../services/BranchTreeViewService";
import { RiArrowDownSFill } from "react-icons/ri";
import { FiCircle } from "react-icons/fi";
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
                <li key={index} title={branch}>
                    <FiCircle color='#BEC1C3' style={{ marginRight: 8 }} size={8} />
                    {branch}
                </li>
            ))}
        </ul>
    }

    return (
        <div className="tree-view">
            {branchList.map((branch, index) => (
                <div key={index}>
                    <span title={branch.name} className="branch-title">{branch.name} branches</span>
                    {(branch.list instanceof Array) ? (
                        <>{renderBranchTreeItem(branch.list)}</>
                    ) : (
                        <ul>
                            <li title={branch.list.name}>
                                <RiArrowDownSFill color='#BEC1C3' style={{ marginRight: 5 }}/>
                                {branch.list.name}
                            </li>
                            {renderBranchTreeItem(branch.list?.list as string[])}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BranchTreeView;