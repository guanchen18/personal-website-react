import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

import Project from './Project';

import data from '../mydata';

function Work () {
    const { t } = useTranslation(); 
    return(
        <div>
            <h1 className='heading'><Fade bottom cascade> {t("Work.title")} </Fade></h1>
            <div className="work-content">
                {data.projects.map((project) => (
                    <Project 
                        key={project.id}
                        title = {project.title}
                        description = {project.description}
                        imageSrc = {project.imageSrc}
                        url={project.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default Work;
