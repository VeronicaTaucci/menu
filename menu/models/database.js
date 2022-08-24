//!  Database Connection - mvc model viewer controller
// connection for postgress with express


//! 1 run: npm install pg-promise
//! 2. createdb menus
//! 4
const pgp = require('pg-promise')(); // Load and initialize pg-promise:
//! 5 Connecting to database 
const connectionString = {
    host: 'localhost',
    port: 5432,
    database: 'menus',
    user: 'postgres' // windows + password: '****'
};

const db = pgp(connectionString); //Create your Database object from the connection as pgp(connection, [dc]):The connection parameter is either a Configuration Object or a Connection String. //dc = Database Context - optional parameter(see Database constructor).

module.exports = db