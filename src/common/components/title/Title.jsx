import React from 'react';
import style from "./Title.module.scss";

export const Title = ({title, subtitle}) => {
    return (
        <div className={style.titleBlock}>
            <span className={style.subtitle}>{subtitle}</span>
            <h2 className={style.title}>{title}</h2>
        </div>
    );
};