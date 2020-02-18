import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// import data from '../mydata';

class Header extends Component{
    state = {}

    render() {
        return (
            <div>
                <h1>CREATIVE</h1>
                <header>
                    <h1>
                        <Fade bottom cascade>guanchen</Fade>
                    </h1>
                </header>
                <Fade bottom>
                <p>
                    Hello, I am Guanchen Song.<br></br>
                    I am living in Uppsala, SE.<br></br>
                    I love building things!<br></br>
                    <button><a href={"guanchen.song.797@gmail.com"} rel="noopener noreferrer" >Contact</a></button>
                </p>
                </Fade>
            </div>
        )

    }
}

export default Header;
