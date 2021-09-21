import React from 'react';
import classes from './FilterBar.module.css'

const FilterBar = () => {
    return (
        <div className={classes.filterBar}>
            <label>
                Filter by state:
                <select>
                    <option value="WI">WI</option>
                    <option value="WI">TN</option>
                    <option value="WI">FL</option>
                    <option value="WI">NE</option>
                </select>
            </label>
        </div>
    );
};

export default FilterBar;
