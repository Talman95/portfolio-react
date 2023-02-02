import React from 'react';
import style from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";
import styleButton from '../common/styles/Button.module.css';
import {Title} from "../common/components/title/Title";

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${style.contactContainer} ${styleContainer.container}`}>
                <Title title={'Contact'} subtitle={'Get in touch'} />

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