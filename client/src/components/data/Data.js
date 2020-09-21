import React from 'react';
import './data.css';
import Info from '../info/Info';

function Data() {
    return(
        <div id="data-container">
            <Info title="Dirección IP" data="192.168.1.265"/>
            <Info title="Ubicación" data="MX"/>
            <Info title="Zona horaria" data="Ametica/Mazatlan"/>
            <Info title="Area" data="20"/>
        </div>
    );
}

export default Data;