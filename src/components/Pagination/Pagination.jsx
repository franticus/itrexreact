import React from 'react';
import classes from './Pagination.module.css'

const Pagination = () => {
    return (
        <div className={classes.pagination}>
            <a href="/">Previous</a>
            <a href="/">1</a>
            <a className="active" href="/">2</a>
            <a href="/">3</a>
            <a href="/">Next</a>
        </div>
    );
};

export default Pagination;
