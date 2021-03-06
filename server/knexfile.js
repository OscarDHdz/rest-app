var path = require('path');
var ENV = process.env.NODE_ENV || 'development';


var db_client   = process.env.DB_CLIENT || 'sqlite3';
var db_host     = process.env.DB_HOST   || '192.168.99.100';
var db_user     = process.env.DB_USER   || 'developer';
var db_password = process.env.DB_PASS   || 'qwerty';
var db_dbname   = process.env.DB_NAME   || 'db_api';
var db_file     = process.env.DB_FILE   || 'database';

var environment = {
  client: db_client,
  connection: {
    host : db_host,
    user : db_user,
    password : db_password,
    database : db_dbname,
    filename: path.join(__dirname, 'database', db_file + '.sqlite'),
  },
  migrations: {
    directory: path.join(__dirname, 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'seeds')
  }
}
module.exports = {
  development: environment,
  test: environment,
  prod: environment
}
