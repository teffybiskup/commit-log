import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IFilterToolbar } from "../types/filter";
import "../styles/FilterToolbar.css";

const FilterToolbar = ({ onFilterChange }: IFilterToolbar) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState<string>(
    searchParams.get("filter") || ""
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (searchParams.get("filter") !== "") setSearchParams({ filter: "" });
    const value = (e.target as HTMLInputElement).value;
    setFilterValue(value);
    onFilterChange(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setSearchParams({ filter: filterValue });
    }
  };

  return (
    <div className="toolbar">
      <input
        data-testid="filter-input"
        className="filter-input"
        placeholder="Filter by commit message..."
        value={filterValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="filter-button"
        onClick={() => setSearchParams({ filter: filterValue })}
      >
        Filter
      </button>
    </div>
  );
};

export default FilterToolbar;
