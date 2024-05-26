const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ekl-agenda',
    password: 'masterkey',
    port: 5432,
});

module.exports = pool;
