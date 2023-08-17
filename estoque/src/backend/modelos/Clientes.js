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
        await pool.query(query, values);
    } catch (ex) {
        console.log("Erro: ", ex);
        throw ex;
    }
}
};


module.exports = Clientes;