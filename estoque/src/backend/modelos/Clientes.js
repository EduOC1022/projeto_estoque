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
      },
    cadastrar: async (req, res) => {
      console.log('req: ',req)
      try {
        const {cpf, nome, contato,  detalhes} = req.body;
        const query = 'INSERT INTO cliente (cpf, nome, contato, detalhes) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [cpf, nome, contato,  detalhes];
        await pool.query(query, values);
    } catch (ex) {
        console.log("Erro: ", ex);
        throw ex;
    }
}
};


module.exports = Clientes;