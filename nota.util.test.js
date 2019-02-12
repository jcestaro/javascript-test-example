const notaUtil = require('./nota-util');

const aluno = { nome: 'Pi', primeiraProva: 8, segundaProva: 8 };

const alunos = [
  { primeiroNome: 'Jose', notaFinal: 1 },
  { primeiroNome: 'Camila', notaFinal: 10 },
  { primeiroNome: 'Fatima', notaFinal: 7 },
  { primeiroNome: 'Wesley', notaFinal: 6 }
];

const alunosOrdenadosPelaNotaAsc = [
    { primeiroNome: 'Jose', notaFinal: 1 },
    { primeiroNome: 'Wesley', notaFinal: 6 },
    { primeiroNome: 'Fatima', notaFinal: 7 },
    { primeiroNome: 'Camila', notaFinal: 10 }
  ];
  

test('calcula a média de um aluno', () => {
  expect(Reflect.apply(notaUtil.media, aluno)).toBe(8);
});

test('calcula a média da turma', () => {
  expect(notaUtil.mediaTurma(alunos)).toBe(6);
});


test('ordena pela média da turma', () => {
    expect(notaUtil.ordenaPelaNotaAsc(alunos)).toEqual(alunosOrdenadosPelaNotaAsc);
  });
  