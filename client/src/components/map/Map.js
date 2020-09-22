import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './map.css';
import store from '../../store';

class MapC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [51.95, 30.33],
            ip: 'Ubicación por default'
        };

        store.subscribe(() => {
            this.setState({
                center: store.getState().ll,
                ip: store.getState().ip
            });
        });
    }

    render() {
        return(
            <div id="map">
                <Map center={this.state.center} id="map-component" zoom={13}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={this.state.center}>
                        <Popup>{this.state.ip}</Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default MapC;