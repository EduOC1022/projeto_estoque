const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'stt123',
    host: '150.162.187.159',
    port: 5432,
    database: 'estoque'
});

const Fornecedores = {
    pesquisar: async (req, res) => {
        try {
          const query = 'SELECT * FROM fornecedor';
          const result = await pool.query(query);
    
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
