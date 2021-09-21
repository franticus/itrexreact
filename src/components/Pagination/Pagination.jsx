import React from 'react';
import classes from './Pagination.module.css'

const Pagination = ({usersPerPage, totalUsers, paginate, next, prev}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={classes.pagination}>
            <a href="!#" onClick={prev}>Previous</a>
            {pageNumbers.map(number => (
                <a href="!#"
                   onClick={() => paginate(number)}
                   key={number}>{number} </a>
            ))}
            <a href="!#" onClick={next}>Next</a>
        </div>
    );
};

export default Pagination;
