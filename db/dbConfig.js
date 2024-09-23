const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // Add your PostgreSQL username
  host: 'localhost',       // PostgreSQL host (local or remote)
  database: 'leave_application', // Database name
  password: 'postgres',// Your PostgreSQL password
  port: 5432,              // Default PostgreSQL port
});

module.exports = pool;
