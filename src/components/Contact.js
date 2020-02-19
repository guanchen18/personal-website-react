import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';

import data from '../mydata';

// Validates the first half of an email address.
const validateText = (text) => {
    // NOTE: Passes RFC 5322 but not tested on google's standard.
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
    return re.test(text) || text.length === 0;
  };
const messages = [
    'hello',
    'hallå',
    '你好',
    'you-can-email-me-at-literally-anything! Really',
    'well, not anything. But most things',
    'like-this',
    'or-this',
    'but not this :(  ',
    'you.can.also.email.me.with.specific.topics.like',
    'just-saying-hi',
    'or-I-really-like-your-website',
    'I\'ll-stop-distracting-you-now',
    'thanks',
  ];

const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      if (delay) {
        const id = setInterval(() => {
          savedCallback.current();
        }, delay);
        return () => clearInterval(id);
      }
      return () => {}; // pass linter
    }, [delay]);
};


const Contact = () => {

  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS
  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      setIsActive(false);
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null); 

  return(
    <div>
        <h1><Fade bottom cascade> Contact.</Fade></h1>
        <Fade bottom>
            <div className="contact-content">
                <h1 className="amazing-color">
                    Let's keep in touch!<br></br>
                </h1>
                {/* <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a> */}
                <div
                className="inline-container"
                style={validateText(message) ? {} : { color: 'green' }}
                onMouseEnter={() => setIsActive(false)}
                onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
            >
                  {/* <a href={validateText(message) ? `mailto:${message}@gmail.com` : ''}> */}
                  <span>{message}</span>
                  {/* <span>@gmail.com</span> */}
                  {/* </a> */}
                </div>
                <ul>
                    {data.social.map((link, index)=>(
                        <li key={index}>
                            <a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a>
                        </li>
                    ))}
                    <span>Made ❤ by Guanchen Song</span>
                </ul>
            </div>
        </Fade>
    </div>
  )
  }

export default Contact;
