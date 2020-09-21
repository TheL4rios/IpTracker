const express = require('express');
const geoip = require('geoip-lite');
const body_parser = require('body-parser');
const app = express();

const port = process.env.PORT || 8080;

app.use(body_parser.urlencoded({extended:true}));
app.get('/', (req, res) => res.send('hola mundo'));

app.post('/tracker', (req, res) => {
    const ip = req.body.ip || '';
    res.json(geoip.lookup(ip));
});

app.listen(port, () => console.log('listenint in port: ' + port));