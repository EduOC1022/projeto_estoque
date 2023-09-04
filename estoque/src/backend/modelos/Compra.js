const db = require('../dbConfig');

const Compras = {
    cadastrar: async (req, res) => {
        console.log('req: ',req)
        try {
          const {idForn, idPeca, data, qtdCompra, valorU, valorTotal} = req.body;
          const query =  `INSERT INTO compra (idForn, idPeca, data, qtdCompra, valorU, valorTotal) 
                          VALUES ($1, $2, $3, $4, $5, $6) 
                          RETURNING *`;
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
          const pesquisa = `SELECT compra.id AS id, fornecedor.nome AS nomeFornecedor, peca.nome AS nomePeca, TO_CHAR(data, 'DD/MM/YYYY') AS data_formatada, qtdCompra, valorU, valorTotal 
                            FROM compra 
                            INNER JOIN fornecedor ON compra.idForn = fornecedor.id 
                            INNER JOIN peca ON compra.idPeca = peca.id`
          const resultados = await db.query(pesquisa);
          const compra = resultados.rows;

          res.json(compra);      
        }
        catch (ex) {
          console.log("Erro: ", ex)
        }
      },
    editar: async (req, res) => {
        try {
          const {idForn, idPeca, data, qtdCompra, valorU, valorTotal, id} = req.body;
          const query =  'UPDATE compra SET nomeFornecedor = $1, nomePeca = $2, tipo = $3, contato = $4 WHERE id = $5';
          const values = [idForn, idPeca, data, qtdCompra, valorU, valorTotal, id];
          await db.query(query, values);
      
          res.send('Compra atualizada com sucesso.');
        } catch (ex) {
          console.log('Erro: ' + ex);
          res.status(500).send('Erro ao atualizar a compra.');
        }
    }
  };

module.exports = Compras;