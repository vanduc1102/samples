"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.set('trust proxy', true)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('common'))

app.get("/health", (req, res) => {
    res.json({ data: { up: Date.now() } });
});

app.get("/envs", (req, res) => {
    res.json({ data: process.env });
});

app.get("/", (req, res) => {
    res.json({ data: "Hello world!" });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
