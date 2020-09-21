import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';

const Marker = ({text}) => <div>{text}</div>;

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return(
            <div id="map">
                <GoogleMapReact
                    bootstrapURLKeys = {{key: "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"}}
                    defaultCenter = {this.props.center}
                    defaultZoom = {this.props.zoom}
                >
                    <Marker
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"/>
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;