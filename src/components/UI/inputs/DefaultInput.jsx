import React from 'react';
import classes from "./DefaultInput.module.css";

const DefaultInput = ({children, ...props}) => {
    return (
        <input className={classes.inp} {...props}>
            {children}
        </input>
    );
};

export default DefaultInput;