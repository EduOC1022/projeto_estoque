const db = require('../dbConfig');

const Pecas = {
    cadastrar: async (req, res) => {
      console.log('req: ',req)
      try {
        const {nome, grupo, quantidade,  descricao, valorp} = req.body;
        const query = 'INSERT INTO peca (nome, grupo, quantidade,  descricao, valorp) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [nome, grupo, quantidade,  descricao, valorp];
        await db.query(query, values);
    } catch (ex) {
        console.log("Erro: ", ex);
        throw ex;
    }
  },
    pesquisar: async (req, res) => {
      try {
        const query = 'SELECT * FROM peca';
        const result = await db.query(query);
  
        const pecas = result.rows;
        console.log('teste', pecas);
  
        res.json(pecas);
      } catch (ex) {
        console.log("Erro: ", ex);
        res.status(500).send('Erro ao buscar pecas.');
      }
  },
    editar: async (req, res) => {
      try {
        const {nome, grupo, quantidade,  descricao, valorp, id} = req.body;
        const query =  'UPDATE peca SET nome = $1, grupo = $2, quantidade = $3, descricao = $4, valorp = $5 WHERE id = $6';
        const values = [nome, grupo, quantidade,  descricao, valorp, id];
        await db.query(query, values);
    
        res.send('Peça atualizada com sucesso.');
      } catch (ex) {
        console.log('Erro: ' + ex);
        res.status(500).send('Erro ao atualizar a peça.');
      }
  }
};

module.exports = Pecas;
