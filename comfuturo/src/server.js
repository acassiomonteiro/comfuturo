// server.js

const express = require('express');
const db = require('./db'); // Importa o arquivo de configuração do banco de dados
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de exemplo para buscar dados no banco de dados
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      res.status(500).json({ error: 'Erro no servidor' });
    } else {
      res.json(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
