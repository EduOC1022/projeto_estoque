const express = require('express');
const routes = require('./rotas');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {Pool} = require('pg');
const db = new Pool ({
    user: 'postgres',
    password: 'stt123',
    host: '150.162.187.159',
    port: 5432,
    database: 'estoque'
});
const porta = 3001;

app.use(cors());
app.use(bodyParser.json());

db.connect();
console.log("Conectado ao banco de dados");

app.use('/', routes);

app.listen(porta, () => {
    console.log('Servidor iniciado na porta 3001.');
});