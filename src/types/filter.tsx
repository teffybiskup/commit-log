import { Dispatch, SetStateAction } from "react";

export interface IFilterToolbar {
  inputSearch: string;
  onFilterChange(message: string): Dispatch<SetStateAction<string>> | void;
}
