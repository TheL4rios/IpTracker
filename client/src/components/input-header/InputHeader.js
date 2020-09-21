import React from 'react';
import Input from '../input/Input';
import './input-header.css';

function InputHeader() {
    return (
        <div id="input-container">
            <h1>Localización de IP</h1>
            <Input/>
        </div>
    );
}

export default InputHeader;