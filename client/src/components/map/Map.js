import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import store from '../../store';
import icon from '../../assets/marker.png'

const Marker = () => <div><img src={icon} alt='x'/></div>;

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            }
        };

        store.subscribe(() => {
            this.setState({
                center: {
                    lat: store.getState().ll[0],
                    lng: store.getState().ll[1]
                }
            });
        });
    }

    static defaultProps = {
        zoom: 11
    };

    render() {
        return(
            <div id="map">
                <GoogleMapReact
                    bootstrapURLKeys = {{key: "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"}}
                    center = {this.state.center}
                    defaultZoom = {this.props.zoom}
                >
                    <Marker
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}/>
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;