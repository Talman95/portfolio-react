import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>
                    My Projects
                </h2>
                <div className={style.projects}>
                    <Project title={'Todolist'}
                             description={'Project description. Project description.'}/>
                    <Project title={'Social Network'}
                             description={'Project description. Project description. Project description. Project description.'}/>
                </div>
            </div>
        </div>
    );
};