const express = require('express');
const router = express.Router();

const Fornecedores = require('./modelos/Fornecedores');

router.get('/listaFornecedor', Fornecedores.pesquisar);
router.get('/listaFornecedor', Fornecedores.pesquisar);

module.exports = router;
