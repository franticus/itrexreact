import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <ul className={classes.profileInfo}>
            <li>Profile info:</li>
            <li>Selected profile: Sue Corson</li>
            <li>Description: El lacus magna dolor</li>
            <li>Address: 97995 Mattis Ct.</li>
            <li>City: Wukesha</li>
            <li>State: WI</li>
            <li>Index: 228228</li>
        </ul>
    );
};

export default ProfileInfo;
