const fatosHistoricos = require('../data/fatos');

function buscarFatoHistorico(ano) {
  fatosHistoricos.forEach((fatoHistorico, index) => {
   
    if(ValidaAno(ano, fatoHistorico)) {
      let fato = fatoHistorico.fato;

      return fato;
    }

  });

  return fato;
};

function ValidaAno(ano, fatoHistorico) {
  return ano === fato.ano;
}

exports.buscarFatoHistorico = buscarFatoHistorico;
