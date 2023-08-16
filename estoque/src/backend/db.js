const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {Pool} = require('pg');
const db = new Pool ({
    user: 'postgres',
    password: 'stt123',
    host: '150.162.187.159',
    port: 5432,
    database: 'estoque'
});
const porta = 3001;

app.use(bodyParser.json());

db.connect();
console.log("Conectado ao banco de dados");

app.get('/fornecedores', async (req, res) => {
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

app.post('/cadastro-fornecedor', async (req, res) => {
  try {
    console.log('ta aqui')
    const { nomeEmpresa, cnpj, contato, complemento } = req.body;

    const query = `INSERT INTO fornecedores (cnpj, nome, complemento,contato ) VALUES ($1, $2, $3, $4)`;

    await dbClient.query(query, [nomeEmpresa, cnpj, contato, complemento]);
    res.status(200).send('Dados do fornecedor inseridos com sucesso.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao inserir os dados do fornecedor.');
  }
});

app.listen(porta, () => {
    console.log('Servidor iniciado na porta 3001.');
});