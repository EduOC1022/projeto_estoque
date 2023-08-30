const express = require('express');
const routes = require('./rotas');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./dbConfig');
const porta = 3001;

app.use(cors());
app.use(bodyParser.json());

db.connect();
console.log("Conectado ao banco de dados");

app.use('/', routes);

app.listen(porta, () => {
    console.log('Servidor iniciado na porta 3001.');
});