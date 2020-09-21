import React from 'react';
import icon from '../../assets/arrow.png';
import './input.css';

function Input() {
    return(
        <div id="input">
            <input type="text" placeholder="Ingrese una IP publica válida"></input>
            <button><img src={icon} alt="x"/></button>
        </div>
    );
}

export default Input;