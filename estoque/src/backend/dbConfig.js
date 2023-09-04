const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    password: 'stt123',
    host: '150.162.193.9',
    port: 5432,
    database: 'estoque'
});

module.exports = db;