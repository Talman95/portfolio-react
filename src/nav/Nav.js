import React from 'react';
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href={''}>Home</a>
            <a href={''}>About</a>
            <a href={''}>Portfolio</a>
            <a href={''}>Contact</a>
        </div>
    );
};