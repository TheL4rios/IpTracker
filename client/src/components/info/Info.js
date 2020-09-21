import React from 'react';
import './info.css';

class Info extends React.Component {
    render() {
        return(
            <div id="info-container">
                <p>{this.props.title}</p>
                <h3>{this.props.data}</h3>
            </div>
        );       
    }
}

export default Info;