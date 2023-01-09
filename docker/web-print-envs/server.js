'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const packageJson = require('./package.json');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('trust proxy', true);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('common'));

app.get('/health', (req, res) => {
  res.json({data: {up: Date.now()}});
});

app.get('/info', (req, res) => {
  res.json({data: packageJson});
});

app.get('/envs', (req, res) => {
  res.json({data: process.env});
});

app.get('/exit-with-error', (req, res) => {
  process.exit(1);
});

app.get('/throw-error', (req, res) => {
  throw new Error('new error');
});

app.get('/', (req, res) => {
  res.json({
    data: 'Hello world!',
    path: req.path,
  });
});

app.listen(PORT, HOST, () => {
  console.log(`${new Date().toISOString()} - Running on http://${HOST}:${PORT}`);
});

module.exports = app;
