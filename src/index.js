const express = require('express');
const app = express();
const { buscarFatoHistorico } = require('./services/servico');

app.get('/', (req, res) => {
  let anoFato = req.query.ano;

  let fato = buscarFatoHistorico(anoFato);

  res.json({Ano: fato});
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
