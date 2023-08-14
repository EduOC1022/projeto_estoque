const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {Pool} = require('pg');
const db = new Pool ({
    user: 'postgres',
    password: 'stt123',
    host: '150.162.186.12',
    port: 5432,
    database: 'estoque'
});
const porta = 3001;

app.use(bodyParser.json());

app.get('/db', async (req, res) => {
    try {
      const pesquisa = 'SELECT * FROM cliente';
      const resultados = await db.query(pesquisa);
      const lista = resultados.rows;
      
      res.json(lista);
    } catch (ex) {
      console.log('Erro ao recuperar dados do banco de dados:', ex);
      res.status(500).send('Erro ao recuperar dados do banco de dados.');
    }
  });

db.connect();
console.log("Conectado ao banco de dados");

app.listen(porta, () => {
    console.log('Servidor iniciado na porta 3001.');
});