const db = require('../dbConfig');

const Fornecedores = {
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
    cadastrar: async (params) =>{

    }
};

module.exports = Fornecedores;
