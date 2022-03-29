import React from 'react';
import style from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";
import styleButton from '../common/styles/Button.module.css';

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${style.contactContainer} ${styleContainer.container}`}>

                <h2 className={style.title}>
                    Contact
                </h2>

                <form className={style.formBlock}>
                    <input type={'text'} name={'name'} placeholder={'Name'}/>
                    <input type={'email'} name={'email'} placeholder={'Email'}/>
                    <textarea placeholder={'Your message'} rows={'6'}/>
                </form>

                <button className={styleButton.button}>
                    Send Message
                </button>

            </div>
        </div>
    );
};