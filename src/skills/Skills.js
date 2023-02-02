import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <Title title={'My Skills'} subtitle={'What i Do?'} />
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Fghd fdjgnkfdj fdgj fdjgdjfg djff ffdd. Fghd fdjgnkfdj fdgj fdjgdjfg djff ffdd'}/>
                    <Skill title={'CSS'} description={'Fghd fdjgnkf j jgdjfg djff ffddq'}/>
                    <Skill title={'React JS'} description={'Fghd dj fdgj fdjgdjfg djff ffdd fgd fhdfjfdk jf fyduds'}/>
                </div>
            </div>
        </div>
    );
};