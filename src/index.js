const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.json({messagem: "Api está funcionando..."});
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Api em execução desde: ${data}`);
});
