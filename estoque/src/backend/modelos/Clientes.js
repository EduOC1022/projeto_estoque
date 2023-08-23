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
      },
    cadastrar: async (req, res) => {
        console.log('req: ',req)
        try {
          const {cpf, nome, contato,  detalhes} = req.body;
          const query = 'INSERT INTO cliente (cpf, nome, contato, detalhes) VALUES ($1, $2, $3, $4) RETURNING *';
          const values = [cpf, nome, contato,  detalhes];
          await db.query(query, values);
        } 
        catch (ex) {
          console.log("Erro: ", ex);
          throw ex;
        }
      },
    excluir: async (req, res) => {
        try {
          const { id } = req.body;
          const query = 'DELETE FROM cliente WHERE id = $1';
          await db.query(query, [id]);
      
          res.status(404).send('Cliente excluído com sucesso');
        } catch (error) {
          console.error(error);
          res.status(500).send('Erro ao excluir o cliente' );
        }
    }
  };


module.exports = Clientes;