import React from 'react';
import { useTranslation } from 'react-i18next';

import imgProfile from '../assets/header/profile.jpg';

function Header () {
    const { t } = useTranslation();
    return (
        <header>
            <h1> {t('title')} </h1>
            <img src={imgProfile} />
        </header>
    )
}

export default Header;
