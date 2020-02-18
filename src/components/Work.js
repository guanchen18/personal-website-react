import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Project from './Project';

class Work extends Component {
    state = {}

    render () {
        return(
            <div>
                <h1 className='heading'><Fade bottom cascade>Work.</Fade></h1>
                <div className="work-content">
                    <Project />
                </div>
            </div>
        )
    }
}

export default Work;
