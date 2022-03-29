import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Roman Talman</h2>

                <div className={style.icons}>
                    <div className={style.icon1}></div>
                    <div className={style.icon2}></div>
                    <div className={style.icon1}></div>
                    <div className={style.icon2}></div>
                    <div className={style.icon1}></div>
                </div>

                <span>&#169; 2022, All Rights Reserved</span>
            </div>
        </div>
    );
};