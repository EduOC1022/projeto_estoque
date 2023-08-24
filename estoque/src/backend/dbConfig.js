const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    password: 'stt123',
    host: '150.162.187.135',
    port: 5432,
    database: 'estoque'
});

module.exports = db;