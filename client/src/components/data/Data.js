import React from 'react';
import './data.css';
import Info from '../info/Info';
import store from '../../store';
import MediaQuery from 'react-responsive';

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
                <MediaQuery minDeviceWidth={947}>
                    <Info title="Dirección IP" data={this.state.ip}/>
                    <Info title="Ubicación" data={this.state.location}/>
                    <Info title="Zona horaria" data={this.state.zone}/>
                    <Info title="Area" data={this.state.area}/>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={947}>
                    <div id="text-container">
                        <p>Ip: {this.state.ip}</p>
                        <p>Ubicación: {this.state.location}</p>
                        <p>Zona horaria: {this.state.zone}</p>
                        <p>Área: {this.state.area}</p>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Data;