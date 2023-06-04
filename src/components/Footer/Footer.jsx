import React from 'react';
import classes from "./Footer.module.css";
const Footer = () => {
    return (
        <footer>
            <div className={classes.footer__content}>
                <p>Степанов Виталий. 2023 г.</p>
            </div>
        </footer>
    );
};

export default Footer;