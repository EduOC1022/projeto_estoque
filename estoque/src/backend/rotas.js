const express = require('express');
const router = express.Router();

const Fornecedores = require('./modelos/Fornecedores');
const Clientes = require('./modelos/Clientes')

router.get('/listaCliente', (req, res) => {
    Clientes.pesquisar(req, res);
  });

router.post('/cliente', (req, res) => {
    Clientes.cadastrar(req, res);
  });


router.get('/listaFornecedor', (req, res) => {
    Fornecedores.pesquisar(req, res);
  });

module.exports = router;
