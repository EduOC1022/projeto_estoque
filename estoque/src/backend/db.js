const express = require('express');
const routes = require('./rotas');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {Pool} = require('pg');
const db = new Pool ({
    user: 'postgres',
    password: 'stt123',
    host: '150.162.187.74',
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


// get fornecedor
/* app.get('/listaFornecedor', async (req, res) => {
  try {
    const pesquisa = 'SELECT * from fornecedor';
    const resultados = await db.query(pesquisa);
    const fornecedor = resultados.rows;

    res.json(fornecedor);      
  }
  catch (ex) {
    console.log("Erro: ", ex)
  }
}); */

// post fornecedor
/* app.post('/fornecedor', async (req, res) => {
  try {
    const {cnpj, nome, tipo, contato} = req.body;

    const query = 'INSERT INTO fornecedor (cnpj, nome, tipo, contato) VALUES ($1, $2, $3, $4)';
    await db.query(query, [cnpj, nome, tipo, contato]);

    res.status(404).send('Recurso criado com sucesso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar o recurso' );
  }
}); */

// get cliente
/* app.get('/listaCliente', async (req, res) => {
  try {
    const pesquisa = 'SELECT * from cliente';
    const resultados = await db.query(pesquisa);
    const fornecedor = resultados.rows;

    res.json(fornecedor);      
  }
  catch (ex) {
    console.log("Erro: ", ex)
  }
});
 */


// post cliente
/* app.post('/cliente', async (req, res) => {
  try {
    const {cpf, nome, contato, detalhes} = req.body;

    const query = 'INSERT INTO cliente (cpf, nome, contato, detalhes) VALUES ($1, $2, $3, $4)';
    await db.query(query, [cpf, nome, contato, detalhes]);

    res.status(404).send('Recurso criado com sucesso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar o recurso' );
  }
}); */

// get peca
/* app.get('/listaPeca', async (req, res) => {
  try {
    const pesquisa = 'SELECT * from peca';
    const resultados = await db.query(pesquisa);
    const fornecedor = resultados.rows;

    res.json(fornecedor);      
  }
  catch (ex) {
    console.log("Erro: ", ex)
  }
}); */

// get compra
/* app.get('/listaCompra', async (req, res) => {
  try {
    const pesquisa = 'SELECT * from compra';
    const resultados = await db.query(pesquisa);
    const fornecedor = resultados.rows;

    res.json(fornecedor);      
  }
  catch (ex) {
    console.log("Erro: ", ex)
  }
}); */

// get venda
/* app.get('/listaVenda', async (req, res) => {
  try {
    const pesquisa = 'SELECT * from venda';
    const resultados = await db.query(pesquisa);
    const fornecedor = resultados.rows;

    res.json(fornecedor);      
  }
  catch (ex) {
    console.log("Erro: ", ex)
  }
}); */