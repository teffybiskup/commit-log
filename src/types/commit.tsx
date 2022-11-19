export interface ICommitTable {
    filterSearch: string;
}

export interface ICommit {
    description: string;
    hash: string;
    author: string;
    date: string;
}