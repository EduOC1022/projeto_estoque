const express = require('express');
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

app.get('/listaFornecedor', async (req, res) => {
  try {
    const pesquisa = 'SELECT * from fornecedor';
    const resultados = await db.query(pesquisa);
    const fornecedor = resultados.rows;

    res.json(fornecedor);      
  }
  catch (ex) {
    console.log("Erro: ", ex)
  }
});

app.post('/fornecedor', async (req, res) => {
  try {
    const {cnpj, nome, tipo, contato} = req.body;

    const query = 'INSERT INTO fornecedor (cnpj, nome, tipo, contato) VALUES ($1, $2, $3, $4)';
    await db.query(query, [cnpj, nome, tipo, contato]);

    res.status(404).send('Recurso criado com sucesso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar o recurso' );
  }
});

app.listen(porta, () => {
    console.log('Servidor iniciado na porta 3001.');
});