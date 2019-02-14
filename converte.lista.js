function nome(pessoas) {
  return pessoas.map(i => i.nome);
}

function nomeComNota(pessoas) {
  return pessoas.map(i => `${i.nome} - ${i.nota}`);
}

function upperCase (pessoas) {
  return pessoas.map( i => i.toUpperCase());
}

function nomeComAprovacao (pessoas, notaParaAprovacao = 8) {
  return pessoas.map(i => `${i.nome} - ${ i.nota > notaParaAprovacao ?'Aprovado' : 'Reprovado'}`)
}

function alunos(pessoas) {
  return pessoas.map( ({ nome: primeiroNome, nota: notaFinal}) => ({ primeiroNome, notaFinal}))
}

module.exports = {
  nome,
  nomeComNota,
  upperCase,
  nomeComAprovacao,
  alunos
};
