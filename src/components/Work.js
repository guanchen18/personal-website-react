import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Project from './Project';
import data from '../mydata';

class Work extends Component {
    state = {}

    render () {
        return(
            <div>
                <h1 className='heading'><Fade bottom cascade>Work.</Fade></h1>
                <div className="work-content">
                    {data.projects.map((project) => (
                        <Project 
                            key={project.id}
                            title = {project.title}
                            service = {project.service}
                            tools = {project.tools}
                            imageSrc = {project.imageSrc}
                            url={project.url}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Work;
