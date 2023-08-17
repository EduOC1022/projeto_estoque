const db = require('../dbConfig');

const Clientes = {
    pesquisar: async (req, res) => {
        try {
          const pesquisa = 'SELECT * from cliente';
          const resultados = await db.query(pesquisa);
          const fornecedor = resultados.rows;
      
          res.json(fornecedor);      
        }
        catch (ex) {
          console.log("Erro: ", ex)
        }
      }
}

module.exports = Clientes;