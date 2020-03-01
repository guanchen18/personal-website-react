import React from 'react';
import Fade from 'react-reveal/Fade';

import Project from './Project';

import data from '../mydata';

function Work () {
    return(
        <div>
            <h1 className='heading'><Fade bottom cascade> Work. </Fade></h1>
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
