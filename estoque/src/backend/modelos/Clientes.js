const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'stt123',
    host: '150.162.187.74',
    port: 5432,
    database: 'estoque'
});

const Clientes = {
    pesquisar: async (req, res) => {
        try {
          const pesquisa = 'SELECT * from cliente';
          const resultados = await pool.query(pesquisa);
          const fornecedor = resultados.rows;
      
          res.json(fornecedor);      
        }
        catch (ex) {
          console.log("Erro: ", ex)
        }
      }
}

module.exports = Clientes;