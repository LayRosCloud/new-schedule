import React from 'react';
import CardItem from "../CardItem/CardItem";
import classes from "./CardList.module.css";

const CardList = ({sortItem, setSortItem, array, header, callback, activeContainer = true}) => {
    return (
        <div className={activeContainer ? classes.column__basics : classes.column}>
            <div className={classes.header__column}>{header}</div>
            <div className="container__column">
                <div className={classes.column__content}>
                    {array.map(obj =>
                        <CardItem key={obj.id} sortItem={sortItem} setSortItem={setSortItem} object={obj}>
                            {callback(obj)}
                        </CardItem>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardList;