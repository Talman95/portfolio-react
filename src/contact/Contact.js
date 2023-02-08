import React from 'react';
import style from './Contact.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import styleButton from '../common/styles/Button.module.scss';
import styleSeparator from '../common/styles/Separator.module.scss';
import borderStyle from '../common/styles/BorderStyle.module.scss';
import {Title} from "../common/components/title/Title";

export const Contact = () => {
    const onSendClick = (e) => {
        e.preventDefault()
    }

    return (
        <div className={`${style.contactBlock} ${styleSeparator.separator}`}>
            <div className={`${style.contactContainer} ${styleContainer.container}`}>
                <Title title={'Contact with me'} subtitle={'Contact'}/>

                <div className={style.mainInfo}>
                    <div className={`${style.formBlock} ${borderStyle.border}`}>
                        <form className={style.form}>
                            <div className={style.formItem}>
                                <label htmlFor="name">Your Name</label>
                                <input type="text"
                                       className="form-control form-control-lg"
                                       name="name" id="name"/>
                            </div>
                            <div className={style.formItem}>
                                <label htmlFor="email">Email</label>
                                <input type="text"
                                       className="form-control form-control-lg"
                                       name="email" id="email"/>
                            </div>
                            <div className={style.formItem}>
                                <label htmlFor="message">Your message</label>
                                <textarea cols={30} rows={10}
                                          className="form-control form-control-lg"
                                          name="message" id="message"/>
                            </div>
                            <div>
                                <button
                                    onClick={onSendClick}
                                    className={styleButton.button}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};