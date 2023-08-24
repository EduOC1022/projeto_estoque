const express = require('express');
const router = express.Router();

const Fornecedores = require('./modelos/Fornecedores');
const Clientes = require('./modelos/Clientes')


//clientes
router.post('/cliente', (req, res) => {
    Clientes.cadastrar(req, res);
  });

router.get('/listaCliente', (req, res) => {
    Clientes.pesquisar(req, res);
  });

router.put('/editarCliente', (req, res) => {
    Clientes.editar(req, res);
    console.log('editar', req)
});

router.delete('/excluirCliente', (req, res) => {
    Clientes.excluir(req, res);
    console.log('excluir', req)
  });


  //fornecedores
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

module.exports = router;
