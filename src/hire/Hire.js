import React from 'react';
import style from './Hire.module.css';
import styleContainer from '../common/styles/Container.module.css';
import styleButton from '../common/styles/Button.module.scss';

export const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${style.hireContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>
                    I am Available For Remote Work
                </h2>
                <button className={styleButton.button}>
                    Hire Me
                </button>
            </div>
        </div>
    );
};