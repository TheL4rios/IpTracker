import React from 'react';
import './data.css';
import Info from '../info/Info';
import store from '../../store';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: '',
            location: '',
            zone: '',
            area: ''
        };

        store.subscribe(() => {
            this.setState({
                ip: store.getState().ip,
                location: store.getState().location,
                zone: store.getState().zone,
                area: store.getState().area
            });
        });
    }

    render() {
        return(
            <div id="data-container">
                <Info title="Dirección IP" data={this.state.ip}/>
                <Info title="Ubicación" data={this.state.location}/>
                <Info title="Zona horaria" data={this.state.zone}/>
                <Info title="Area" data={this.state.area}/>
            </div>
        );
    }
}

export default Data;