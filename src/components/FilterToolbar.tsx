import React from 'react';
import { IFilterToolbar } from '../types/filter';

import "../styles/FilterToolbar.css";
const FilterToolbar = ({ onFilterChange }: IFilterToolbar) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        onFilterChange((e.target as HTMLInputElement).value);
    };

    return (
        <div className="toolbar">
            <input
                onChange={handleChange}
                placeholder="Filter by commit message..."
            >
            </input>
        </div>
    );
};

export default FilterToolbar;