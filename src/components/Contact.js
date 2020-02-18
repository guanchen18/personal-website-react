import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import data from '../mydata';

class Contact extends Component{
    state = {}

    render () {

        return(
            <div>
                <h1><Fade bottom cascade> Contact.</Fade></h1>
                <Fade bottom>
                    <div className="contact-content">
                        <h1 className="amazing-color">
                            Let's keep in touch!<br></br>
                        </h1>
                        <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                        <ul>
                            {data.social.map((link, index)=>(
                                <li key={index}>
                                    <a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Contact;
