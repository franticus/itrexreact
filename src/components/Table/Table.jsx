import React from 'react';
import classes from './Table.module.css'
import TableRow from "./TableRow/TableRow";

const Table = ({users}) => {
    return (
        <table className={classes.table}
               border='1'
               align='center'
               cellPadding='5'
               cellSpacing='0'
               width='600'
        >
            <tbody>
            <tr>
                <td>id &#9650;</td>
                <td>First name &#9650;</td>
                <td>Last name &#9650;</td>
                <td>Email &#9650;</td>
                <td>Phone &#9650;</td>
                <td>State &#9650;</td>
            </tr>
            {users && users.map((user, index) => (
                <TableRow user={user} key={index}/>
            ))}
            </tbody>

        </table>
    );
};

export default Table;
