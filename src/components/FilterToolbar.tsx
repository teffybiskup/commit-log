import React from "react";
import { IFilterToolbar } from "../types/filter";

import "../styles/FilterToolbar.css";
const FilterToolbar = ({ onFilterChange }: IFilterToolbar) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onFilterChange((e.target as HTMLInputElement).value);
  };

  return (
    <div className="toolbar">
      <input
        className="filter-input"
        placeholder="Filter by commit message..."
        onChange={handleChange}
      />
      <button className="filter-button">Filter</button>
    </div>
  );
};

export default FilterToolbar;
