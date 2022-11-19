import React, { useEffect, useState } from 'react';
import { ICommitTable, ICommit } from '../types/commit';
import "../styles/CommitTable.css";
import Pill from './Pill';

const CommitTable = ({ filterSearch }: ICommitTable) => {
    const [items] = useState<ICommit[]>([
        {
            branch: "origin/feature/test2",
            branchBackgroundColor: "#DF9FF7",
            branchColor: "#624573",
            description: "Some commit message from the developer here",
            hash: "057d1e616b4a4...",
            author: "John Smith",
            date: "Today at 9:25 PM",
        }
    ]);

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
                {items
                .filter(item => !filterSearch || item.description.toLowerCase().includes(filterSearch.toLowerCase()))
                .map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{!filterSearch && "X"}</td>
                            <td>
                                {!filterSearch && (
                                    <Pill
                                        text={item.branch}
                                        backgroundColor={item.branchBackgroundColor}
                                        color={item.branchColor}
                                    />
                                )}
                                {item.description}
                            </td>
                            <td>{item.hash}</td>
                            <td>{item.author}</td>
                            <td>{item.date}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default CommitTable;