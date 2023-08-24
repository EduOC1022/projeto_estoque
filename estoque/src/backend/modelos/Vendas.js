const db = require('../dbConfig');

const Vendas = {
    cadastrar: async (req, res) => {
        console.log('req: ',req)
        try {
          const {idPeca, idCliente, data, qtd, valorU, valorTotal} = req.body;
          const query = 'INSERT INTO venda (idPeca, idCliente, data, qtd, valorU, valorTotal) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
          const values = [idPeca, idCliente, data, qtd, valorU, valorTotal];
          await db.query(query, values);
        } 
        catch (ex) {
          console.log("Erro: ", ex);
          throw ex;
        }
      },  
    pesquisar: async (req, res) => {
        try {
          const pesquisa = 'SELECT * from venda';
          const resultados = await db.query(pesquisa);
          const venda = resultados.rows;
      
          res.json(venda);      
        }
        catch (ex) {
          console.log("Erro: ", ex)
        }
      }
  };


module.exports = Vendas;