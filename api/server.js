const express = require('express');
const server = express();
const morgan = require('morgan');

const middleware = [
    express.json(),
    morgan('dev')
]

server.use(middleware);

server.get('/', (req, res) => {
    res.status(200).send('API is running');
})

server.post('/', (req, res) => {
    const payload = req.body;
    res.status(201).send({ request: req.body, message: 'POST request received' });
})

module.exports = server;
