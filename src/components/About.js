import React from 'react';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

function About()  {
    const { t } = useTranslation();
    return (
        <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                <p>
                    {t('About1')}
                    {t('About2')}
                    {t('About3')}
                    {t('About4')}
                </p>
            </Fade>
        </div>
    )
}

export default About;
