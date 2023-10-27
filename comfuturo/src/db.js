// db.js

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'comfuturo',
  password: '',
  database: 'users',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados');
  }
});

module.exports = db;
