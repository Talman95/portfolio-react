import React from 'react';
import style from './Project.module.scss';
import borderStyle from '../../common/styles/BorderStyle.module.scss';

export const Project = (props) => {
    return (
        <div className={`${style.project} ${borderStyle.border}`}>
            <div className={style.wrapper}>
                {/*<a className={style.viewBtn}>*/}
                {/*    View*/}
                {/*</a>*/}
                <a href={props.link} target={'_blank'} rel={'noopener noreferrer'}>
                    <div className={style.image} style={props.style}/>
                </a>
            </div>

            <div className={style.descriptionBlock}>
                <h3 className={style.title}>
                    {props.title}
                </h3>
                <a href={props.link} target={'_blank'} rel={'noopener noreferrer'}>
                    <h4 className={style.description}>
                        {props.description}
                    </h4>
                </a>
            </div>
        </div>
    );
};