export interface ICommitBranch {
    name: string;
    backgroundColor: string;
    textColor: string;
    showPill: boolean,
}

export interface ICommit {
    branches: ICommitBranch[];
    description: string;
    hash: string;
    author: string;
    date: string;
}

export interface ICommitTable {
    filterSearch: string;
}