import { Dispatch, SetStateAction } from "react";

export interface IFilterToolbar {
  onFilterChange(message: string): Dispatch<SetStateAction<string>> | void;
}
