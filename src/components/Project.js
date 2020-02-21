import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';


class Project extends Component {
    state = {}
    
    render() {
        return (
            <Fade bottom>
                <div className='project'>
                    <a href={this.props.url}>
                        <img src={this.props.imageSrc} alt={this.props.title}/>
                    </a>
                    <h1>{this.props.title}</h1>
                    <span>{this.props.service}</span><br></br>
                    <h4>{this.props.tools}</h4>
                </div>
            </Fade>
        )
    }
}

export default Project;
