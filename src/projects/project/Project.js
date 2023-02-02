import React from 'react';
import style from './Project.module.scss';

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.wrapper}>
                {/*<a className={style.viewBtn}>*/}
                {/*    View*/}
                {/*</a>*/}
                <a href={props.link} target={'_blank'}>
                    <div className={style.image} style={props.style}/>
                </a>
            </div>

            <div className={style.descriptionBlock}>
                <h3 className={style.title}>
                    {props.title}
                </h3>
                <a href={props.link} target={'_blank'}>
                    <h4 className={style.description}>
                        {props.description}
                    </h4>
                </a>
            </div>
        </div>
    );
};