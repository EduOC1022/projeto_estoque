const db = require('../dbConfig');

const Compras = {
    cadastrar: async (req, res) => {
        console.log('req: ',req)
        try {
          const {idForn, idPeca, data, qtdCompra, valorU, valorTotal} = req.body;
          const query = 'INSERT INTO compra (idForn, idPeca, data, qtdCompra, valorU, valorTotal) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
          const values = [idForn, idPeca, data, qtdCompra, valorU, valorTotal];
          await db.query(query, values);
        } 
        catch (ex) {
          console.log("Erro: ", ex);
          throw ex;
        }
      },  
    pesquisar: async (req, res) => {
        try {
          const pesquisa = `SELECT fornecedor.nome AS nomeForn, peca.nome AS nomePeca, data, qtdCompra, valorU, valorTotal 
                            From ((compra 
                            INNER JOIN peca ON compra.idPeca = peca.id)
                            INNER JOIN fornecedor ON compra.idForn = fornecedor.id) WHERE `;
          const resultados = await db.query(pesquisa);
          const compra = resultados.rows;

          res.json(compra);      
        }
        catch (ex) {
          console.log("Erro: ", ex)
        }
      }
  };

module.exports = Compras;