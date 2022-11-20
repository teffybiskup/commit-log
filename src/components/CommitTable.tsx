import React, { useEffect, useState } from 'react';
import { ICommitTable, ICommit, ICommitBranch } from '../types/commit';
import { getAllCommits } from '../services/CommitTableService';
import Pill from './Pill';
import "../styles/CommitTable.css";

const CommitTable = ({ filterSearch }: ICommitTable) => {
    const [commitList, setCommitList] = useState<ICommit[] | []>([]);

    useEffect(() => {
        async function fetchCommitList() {
            const commits = await getAllCommits();
            setCommitList(commits);
        }

        fetchCommitList();
    }, []);

    const renderPill = (branches: ICommitBranch[]) => {
        return !filterSearch && branches
            .filter(branch => branch.showPill)
            .map((branch) => {
                return (
                    <Pill
                        text={branch.name}
                        backgroundColor={branch.backgroundColor}
                        color={branch.textColor}
                    />
                )
            })
    }

    const renderTableBody = () => {
        return commitList
            .filter(commit => !filterSearch || commit.description.toLowerCase().includes(filterSearch.toLowerCase()))
            .map((commit, index) => {
                return (
                    <tr key={index}>
                        <td>{!filterSearch && "X"}</td>
                        <td>
                            {renderPill(commit.branches)}
                            {commit.description}
                        </td>
                        <td>{commit.hash}</td>
                        <td>{commit.author}</td>
                        <td>{commit.date}</td>
                    </tr>
                )
            })
    }

    return (
        <table className="commit-table">
            <thead className="table-header">
                <tr>
                    <th>{!filterSearch && "Graph"}</th>
                    <th>Description</th>
                    <th>Commit #</th>
                    <th>Author</th>
                    <th>Date</th>
                </tr>
            </thead>

            <tbody className="table-body">
                {renderTableBody()}
            </tbody>
        </table>
    );
};

export default CommitTable;