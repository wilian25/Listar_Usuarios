const express = require('express');
const cors = require('cors');
const app = express();
const users = require('./users.json');

app.use(cors());

// Retorna todos usuários
app.get('/usuarios', (req, res) => {
  res.json(users);
});

// Retorna usuário por ID
app.get('/usuarios/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
