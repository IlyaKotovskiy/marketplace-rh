const { Pool } = require('pg');

// Подключение к БД
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Matilda026',
  port: 5432
});

module.exports = pool;