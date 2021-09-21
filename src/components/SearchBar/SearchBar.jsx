import React from 'react';
import classes from './SearchBar.module.css'

const SearchBAr = () => {
    return (
        <div className={classes.searchBar}>
            <label>
                Search by name:
                <input type="text" name="name" placeholder='name'/>
            </label>
        </div>
    );
};

export default SearchBAr;
