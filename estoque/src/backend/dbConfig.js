const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    password: 'stt123',
    host: '192.168.3.33',
    port: 5432,
    database: 'estoque'
});

module.exports = db;