export interface IBranch {
    name: string;
    list: string[] | IBranch;
}