import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Translation extends Component {
    constructor(props) {
        super(props);
        this.state = { language: this.props.i18n.languages[0] };

        this.changeLanguage = this.changeLanguage.bind(this);
    };

    changeLanguage(event) {
        this.props.i18n.changeLanguage(event.target.value);
        this.setState(
            { language: this.props.i18n.languages[0] }
        );
    }

    render() {
        return(
            <select value={this.state.language} onChange={this.changeLanguage}>
                <option value="en"> English </option>
                <option value="zh-Hans"> Chinese </option>
            </select> 
        )
         
    }
}

export default withTranslation()(Translation);
