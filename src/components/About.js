import React from 'react';
import { useTranslation } from 'react-i18next';

import imgProfile from '../assets/header/profile.jpg';

function About()  {
    const { t } = useTranslation();
    return (
        <div className='flex-container'>
            <img src={imgProfile} alt="my profile"/>
            <div className='flex-text'>
                <h3>{t('About.line1')}</h3>
                {t('About.line2')}
                {t('About.line3')}
                {t('About.line4')}
            </div>
        </div>
    )
}

export default About;
