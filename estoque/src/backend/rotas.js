const express = require('express');
const router = express.Router();

const Fornecedores = require('./modelos/Fornecedores');
const Clientes = require('./modelos/Clientes');
const Pecas = require('./modelos/Pacas');
const Compras = require('./modelos/Compra');
const Vendas = require('./modelos/Vendas');

// Clientes
router.post('/cliente', (req, res) => {
    Clientes.cadastrar(req, res);
  });

router.get('/listaCliente', (req, res) => {
    Clientes.pesquisar(req, res);
  });

router.put('/editarCliente', (req, res) => {
    Clientes.editar(req, res);
});

router.delete('/excluirCliente', (req, res) => {
    Clientes.excluir(req, res);
  });

  // Fornecedores
router.post('/fornecedor', (req, res) => {
    Fornecedores.cadastrar(req, res);
  });

router.get('/listaFornecedor', (req, res) => {
    Fornecedores.pesquisar(req, res);
  });

router.put('/editarFornecedor', (req, res) => {
    Fornecedores.editar(req, res);
});

router.delete('/excluirFornecedor', (req, res) => {
    Fornecedores.excluir(req, res);
});

  // Peças
router.post('/peca', (req, res) => {
    Pecas.cadastrar(req, res);
});

router.get('/listaPeca', (req, res) => {
    Pecas.pesquisar(req, res);
  });

router.put('/editarPeca', (req, res) => {
    Pecas.editar(req, res);
});

// Compras
router.post('/compra', (req, res) => {
  Compras.cadastrar(req, res);
});

router.get('/listaCompra', (req, res) => {
  Compras.pesquisar(req, res);
});

// Vendas
router.post('/venda', (req, res) => {
  Vendas.cadastrar(req, res);
});

router.get('/listaVenda', (req, res) => {
  Vendas.pesquisar(req, res);
});

module.exports = router;