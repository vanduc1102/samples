"use strict";

const express = require("express");
const bodyParser = require("body-parser");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/envs", (req, res) => {
    res.json({ data: process.env });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
