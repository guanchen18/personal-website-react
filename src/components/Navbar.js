import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { withTranslation } from 'react-i18next';

class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link 
                            className='link'
                            activeClass="active" 
                            to="Header" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}>
                        {this.props.t("Nav.Home")}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className='link'
                            activeClass="active" 
                            to="work" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}>
                        {this.props.t("Nav.Work")}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className='link'
                            activeClass="active" 
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}>
                        {this.props.t("Nav.Contact")}
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default withTranslation() (Navbar);
