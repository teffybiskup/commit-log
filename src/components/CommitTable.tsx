import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ICommitTable, ICommit, ICommitBranch } from "../types/commit";
import { getAllCommits } from "../services/CommitTableService";
import CommitGraph from "./CommitGraph";
import Pill from "./Pill";
import "../styles/CommitTable.css";

const CommitTable = ({ filterSearch }: ICommitTable) => {
  const [searchParams] = useSearchParams();
  const [commitList, setCommitList] = useState<ICommit[] | []>([]);

  useEffect(() => {
    async function fetchCommitList() {
      const commits = await getAllCommits();
      setCommitList(commits);
    }

    fetchCommitList();
  }, []);

  const filterValue = filterSearch || searchParams.get("filter");

  const renderPill = (branches: ICommitBranch[]) => {
    return (
      !filterValue &&
      branches
        .filter((branch) => branch.showPill)
        .map((branch) => {
          return (
            <Pill
              text={branch.name}
              backgroundColor={branch.backgroundColor}
              color={branch.textColor}
            />
          );
        })
    );
  };

  const renderTableBody = () => {
    return commitList
      .filter(
        (commit) =>
          !filterValue ||
          commit.description.toLowerCase().includes(filterValue.toLowerCase())
      )
      .map((commit, index) => {
        return (
          <tr key={index}>
            <td></td>
            <td>
              {renderPill(commit.branches)}
              {commit.description}
            </td>
            <td>{commit.hash}</td>
            <td>{commit.author}</td>
            <td>{commit.date}</td>
          </tr>
        );
      });
  };

  return (
    <table className="commit-table">
      <thead className="table-header">
        <tr>
          <th>{!filterValue && "Graph"}</th>
          <th>Description</th>
          <th>Commit #</th>
          <th>Author</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody className="table-body">
        {!filterValue && <CommitGraph />}
        {renderTableBody()}
      </tbody>
    </table>
  );
};

export default CommitTable;
