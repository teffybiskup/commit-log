import React from 'react';
import "../styles/FilterToolbar.css";

const FilterToolbar = () => {
    return (
        <div className="toolbar">
            <input placeholder="Filter by commit message..."></input>
            <button>Filter</button>
        </div>
    );
};

export default FilterToolbar;