const express = require('express');
const app = express();
const {Pool} = require('pg');
const db = new Pool ({
    user: 'postgres',
    password: 'stt123',
    host: '192.168.3.33',
    port: 5432,
    database: 'estoque'
});

db.connect();
console.log("Conectado ao banco de dados");

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000.');
});