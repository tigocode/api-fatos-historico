const express = require('express');
const app = express();
const { buscarFatoHistorico, validaAno } = require('./services/servico');

app.get('/', (req, res) => {
  let anoFato = req.query.ano;

  if(validaAno(anoFato)) {
    let fato = buscarFatoHistorico(anoFato);
    let resultadoFinal = {fato: fato}
    res.status(200).json(resultadoFinal);
  } else {
    res.status(400).json({messagem: 'O ano informado está fora do range 1920 - 2020 ou do tipo inválido!'});
  }
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
