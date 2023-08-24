const db = require('../dbConfig');

const Fornecedores = {
    cadastrar: async (req, res) => {
        console.log('req: ',req)
        try {
          const {cnpj, nome, tipo,  contato} = req.body;
          const query = 'INSERT INTO fornecedor (cnpj, nome, tipo, contato) VALUES ($1, $2, $3, $4) RETURNING *';
          const values = [cnpj, nome, tipo,  contato];
          await db.query(query, values);
      } catch (ex) {
          console.log("Erro: ", ex);
          throw ex;
      }
  },
    pesquisar: async (req, res) => {
        try {
          const query = 'SELECT * FROM fornecedor';
          const result = await db.query(query);
    
          const fornecedores = result.rows;
          console.log('teste', fornecedores);
    
          res.json(fornecedores);
        } catch (ex) {
          console.log("Erro: ", ex);
          res.status(500).send('Erro ao buscar fornecedores.');
        }
  },
    editar: async (req, res) => {
      try {
        const {cnpj, nome, tipo, contato, id} = req.body;
        const query =  'UPDATE fornecedor SET cnpj = $1, nome = $2, tipo = $3, contato = $4 WHERE id = $5';
        const values = [cnpj, nome, tipo, contato, id];
        await db.query(query, values);
    
        res.status(404).send('Fornecedor atualizado com sucesso.');
      } catch (ex) {
        console.log('Erro: ' + ex);
        res.status(500).send('Erro ao atualizar o fornecedor.');
      }
  },
      excluir: async (req, res) => {
        try {
          const { id } = req.body;
          const query = 'DELETE FROM fornecedor WHERE id = $1';
          await db.query(query, [id]);
      
          res.status(404).send('Fornecedor excluído com sucesso');
        } catch (error) {
          console.error(error);
          res.status(500).send('Erro ao excluir o fornecedor' );
        }
  }
};

module.exports = Fornecedores;
