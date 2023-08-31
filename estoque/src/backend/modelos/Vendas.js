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
          const pesquisa = `SELECT venda.id AS id, peca.nome AS nomePeca, cliente.nome AS nomeCliente, TO_CHAR(data, 'DD/MM/YYYY') AS data_formatada, venda.qtd AS qtdVenda, valorU, valorTotal 
                            FROM venda 
                            INNER JOIN peca ON venda.idpeca = peca.id 
                            INNER JOIN cliente ON venda.idcliente = cliente.id`;
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