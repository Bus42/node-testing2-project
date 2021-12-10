const express = require('express');
const server = express();
const morgan = require('morgan');

const middleware = [
    express.json(),
    morgan(process.env.NODE_ENV || 'dev')
]

server.use(middleware);

server.use('/', (req, res) => {
    res.status(200).send('API is running');
})

module.exports = server;
