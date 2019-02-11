const notaUtil = require('./nota-util');

const aluno = { nome: 'Pi', primeiraProva: 8, segundaProva: 8 };

const alunos = [
  { primeiroNome: 'Jose', notaFinal: 8 },
  { primeiroNome: 'Camila', notaFinal: 9 },
  { primeiroNome: 'Fatima', notaFinal: 9 },
  { primeiroNome: 'Wesley', notaFinal: 8 }
];

test('calcula a média de um aluno', () => {
  // expect(Reflect.apply(notaUtil.media, aluno)).toBe(8);
});

test('calcula a média da turma', () => {
  expect(notaUtil.mediaTurma(alunos)).toBe(8.5);
});
