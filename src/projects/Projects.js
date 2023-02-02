import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import styleSeparator from '../common/styles/Separator.module.scss';
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from '../assets/images/todolist.jpg'
import socialNetworkImage from '../assets/images/socialNetwork.png'

export const Projects = () => {
    const myProjects = [
        {
            title: 'TodoList',
            description: 'A project to generate todolists and track overall progress',
            link: 'https://talman95.github.io/social-network/#/profile',
            style: {
                backgroundImage: `url(${todoImage})`,
            }
        },
        {
            title: 'Social Network',
            description: 'Social network project for developers',
            link: 'https://talman95.github.io/todolist/',
            style: {
                backgroundImage: `url(${socialNetworkImage})`,
            }
        }
    ]

    return (
        <div className={`${style.projectsBlock} ${styleSeparator.separator}`}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <Title title={'My Portfolio'}
                       subtitle={'Visit my portfolio and keep your feedback'}/>
                <div className={style.projects}>
                    {myProjects.map(({title, description, link, style}) =>
                        <Project
                            key={title} title={title} description={description}
                            link={link} style={style}/>)}
                </div>
            </div>
        </div>
    );
};