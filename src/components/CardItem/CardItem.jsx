import React from 'react';
import classes from './CardItem.module.css'

const CardItem = ({setSortItem, sortItem, object, children}) => {

    return (
        <div onClick={() => setSortItem(object.id)}
             className={sortItem === object.id ? `${classes.card} ${classes.active}` : classes.card}>
                {children}
        </div>
    );
};

export default CardItem;