export interface ICommitTable {
    filterSearch: string;
}

export interface ICommit {
    branch: string;
    branchBackgroundColor: string;
    branchColor: string;
    description: string;
    hash: string;
    author: string;
    date: string;
}