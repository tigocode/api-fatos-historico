const fatosHistoricos = require('../data/fatos');

function buscarFatoHistorico(ano) {
  let resultado = '';
  fatosHistoricos.forEach((fatoHistorico, index) => {
    let anoFato = fatoHistorico.ano; /* obtendo o valor do ano do array */
    if(buscarAno(anoFato, ano)) {
      resultado = fatoHistorico.fato; /* obtendo o valor do fato historico do array e salvar na variavel resultado */
    }
  });
  return resultado;
};

function validaAno(ano) {
  return ano >= 1920 && ano <= 2020; /* valida se o ano enviado pelo front atende ao periodo esperado */
}

function buscarAno(anoFato, ano) {
  return anoFato === ano; /* valida se ano enviado pelo front-end e o ano do array sao iguais/mesmo tipo */
}

module.exports = { buscarFatoHistorico, validaAno };
