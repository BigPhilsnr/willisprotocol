'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path')
const morgan = require('morgan')
var cors = require('cors');
const exec = require('child_process').exec;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
}))

const publicFiles = __dirname + '/dist';

app.use(express.static(publicFiles));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = app;