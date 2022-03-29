import React from 'react';
import style from './Project.module.css';
import styleButton from '../../common/styles/Button.module.css';

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.photoBlock}>
                <button className={styleButton.button}>
                    View
                </button>
            </div>

            <div className={style.descriptionBlock}>
                <h3 className={style.title}>
                    {props.title}
                </h3>
                <span className={style.description}>
                    {props.description}
                </span>
            </div>
        </div>
    );
};