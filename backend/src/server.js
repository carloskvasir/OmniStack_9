const express = require('express');

const app = express();

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());

app.post('/users', (req, res) => {
  return res.json(req.body);
});

app.listen(3333);
