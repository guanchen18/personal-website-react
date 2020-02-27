import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
// import { LoremIpsum } from 'react-lorem-ipsum';
import data from '../mydata';

class About extends Component {
    state = { }

    render () {
        return (
            <div className="about">
                <div className='about-content'>
                <h1><Fade bottom cascade>About.</Fade></h1>
                <Fade bottom>
                    <p>{data.aboutText}</p>
                </Fade>
                </div>

            </div>
        )
    }
}
export default About;
