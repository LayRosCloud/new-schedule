import React from 'react';
import classes from "./Navbar.module.css";
import DefaultInput from "../UI/inputs/DefaultInput";

const Navbar = () => {
    return (
        <header>
            <div className={classes.header__content}>
                <div className={classes.logo}>
                    <a href="http://khsu.ru/">
                        <img src={require('../../static/logo.png')} className={classes.logo__image}/>
                    </a>
                    <h3>расписание</h3>
                </div>
                <DefaultInput style={{width:300, height:30}} type="text" placeholder="поиск по группам или преподавателям..."/>
            </div>
        </header>
    );
};

export default Navbar;