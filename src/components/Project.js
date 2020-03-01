import React from 'react';
import { useTranslation } from 'react-i18next';

import Fade from 'react-reveal/Fade';

function Project(props) {
    const { t } = useTranslation(); 
    return (
        <Fade bottom>
            <div className='project'>
                <a href={props.url}>
                    <img src={props.imageSrc} alt={props.title}/>
                    <h1> {t(props.title)} </h1>
                </a>
                <p> {t(props.description)} </p>
            </div>
        </Fade>
    )
}

export default Project;
