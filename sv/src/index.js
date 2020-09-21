const express = require('express');
const geoip = require('geoip-lite');
const app = express();
const http = require('http').createServer(app);

const port = process.env.PORT || 8080;

app.get('/:ip', (req, res) => {
    const ip = req.params.ip;
    res.json(geoip.lookup(ip));
});

http.listen(port, () => console.log('listening on port: ' + port));
