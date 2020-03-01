import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

import data from '../mydata';

const Contact = () => {
  const { t } = useTranslation();

  return(
    <div>
      <h1><Fade bottom cascade> {t('Contact.title')} </Fade></h1>
      <Fade bottom>
        <div className="contact-content">
            <h2 className="amazing-color">
              {t('Contact.message')}<br></br>
            </h2>
            <ul>
              {data.social.map((link, index)=>{
                if (link.name==="Email"){return <li key={index}><a href={`mailto:${link.name}`}>{t(link.name)}</a></li>}
                else{
                  return <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{t(link.name)}</a></li>
                }
              })}
            </ul>
        </div>
      </Fade>
    </div>
  )
}

export default Contact;
