import React from 'react';

const TableRow = ({user}) => {

    const {id, firstName, lastName, email, phone, adress} = user

    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{adress.state}</td>
        </tr>
    );
};

export default TableRow;
