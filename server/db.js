const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "123",
  host: "localhost",
  port:   5001,
  database: "perntodo",
});

module.exports = pool;
