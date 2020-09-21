import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8080'
        });
    }

    async getData(ip) {
        try {
            return (await this.api.get(ip)).data;
        } catch (e) {
            console.log(e);
        }
    }
}

const api = new Api();
export default api;