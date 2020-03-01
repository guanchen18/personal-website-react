import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation(); 
    return (
        <div>
            <p className="footer"> {t("Footer.message")} </p>
        </div>
    )
}

export default Footer;
