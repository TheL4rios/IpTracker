import React from 'react';
import icon from '../../assets/arrow.png';
import './input.css';
import api from '../../api/Api';
import store from '../../store';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: '',
            inputStyle: {border: '0px solid'}
        };


        this.handleChange = this.handleChange.bind(this);
        this.sendIp = this.sendIp.bind(this);
    }

    handleChange(e) {
        this.setState({ip: e.target.value});
    }

    async sendIp(e) {
        const data = await api.getData(this.state.ip);

        if (!data) {
            this.setState({inputStyle: {border: '2px solid red'}});
            alert('Debe ingresar una ip publica válida');
            return;
        }

        this.setState({inputStyle: {border: '0px solid'}});
        this.showData(data);
    }

    showData(data) {
        store.dispatch({
            type: 'SET_TO_DATA',
            ip: this.state.ip,
            location: data.country + '/' + data.region,
            zone: data.timezone,
            area: data.area,
            ll: data.ll
        });
    }

    render() {
        return(
            <div id="input">
                <input style={this.state.inputStyle} onChange={this.handleChange} type="text" placeholder="Ingrese una IP publica válida"></input>
                <button onClick={this.sendIp}><img src={icon} alt="x"/></button>
            </div>
        );
    }  
}

export default Input;