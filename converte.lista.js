function nome(pessoas) {
  return pessoas.map((pessoas) => pessoas.nome);
}

function nomeComNota(pessoas) {
  return pessoas.map((pessoas) => pessoas.nome + ' - ' + pessoas.nota);
}

function upperCase (pessoas) {
  return pessoas.map((pessoas) => pessoas.toUpperCase(nome));
}

function nomeComAprovacao (pessoas, notaParaAprovacao = 8) {
  return pessoas.map((pessoas) => {
    if(pessoas.nota > notaParaAprovacao){
      return pessoas.nome + ' - ' + 'Aprovado';
    } else {
      return pessoas.nome + ' - ' + 'Reprovado'
    }
  })
}

function alunos(pessoas) {
  return pessoas.map((pessoas) => JSON.parse(JSON.stringify({ primeiroNome: pessoas.nome, notaFinal: pessoas.nota })));
}

module.exports = {
  nome,
  nomeComNota,
  upperCase,
  nomeComAprovacao,
  alunos
};
