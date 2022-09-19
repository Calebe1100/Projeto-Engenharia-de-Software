const express = require('express');
const app = express();

const db = require('./models/db');

app.get("/", async (req, res) => {
    res.send("Página inicial");
});

var port = 3000;

app.listen(port, () => {
    console.log("Servidor iniciado na porta 3000");
});