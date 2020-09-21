import {createStore} from 'redux';

const reducer = (state, action) => {
    if(action.type === 'SET_TO_DATA') {
        return {
            ...state,
            ip: action.ip,
            location: action.location,
            zone: action.zone,
            area: action.area,
            ll: action.ll
        };
    }

    return state;
};

export default createStore(reducer, {
    ip: '',
    location: '',
    zone: '',
    area: '',
    ll: [],
});