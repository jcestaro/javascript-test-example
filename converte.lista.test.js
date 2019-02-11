const conversor = require('./converte.lista');

const pessoas = [
  { nome: 'Jose', nota: 8 },
  { nome: 'Camila', nota: 9 },
  { nome: 'Fatima', nota: 9 },
  { nome: 'Wesley', nota: 8 }
];

const alunos = [
  { primeiroNome: 'Jose', notaFinal: 8 },
  { primeiroNome: 'Camila', notaFinal: 9 },
  { primeiroNome: 'Fatima', notaFinal: 9 },
  { primeiroNome: 'Wesley', notaFinal: 8 }
];

test('converte lista de pessoas para lista de nomes', () => {
  expect(conversor.nome(pessoas)).toEqual([
    'Jose',
    'Camila',
    'Fatima',
    'Wesley'
  ]);
});

test('converte lista de pessoas para lista de nomes com a nota', () => {
  expect(conversor.nomeComNota(pessoas)).toEqual([
    'Jose - 8',
    'Camila - 9',
    'Fatima - 9',
    'Wesley - 8'
  ]);
});

test('converte lista de pessoas para lista de nomes com aprovação', () => {
  expect(conversor.nomeComAprovacao(pessoas)).toEqual([
    'Jose - Reprovado',
    'Camila - Aprovado',
    'Fatima - Aprovado',
    'Wesley - Reprovado'
  ]);
  expect(conversor.nomeComAprovacao(pessoas, 9)).toEqual([
    'Jose - Reprovado',
    'Camila - Reprovado',
    'Fatima - Reprovado',
    'Wesley - Reprovado'
  ]);
});

test('converte lista de nomes para upperCase', () => {
  expect(conversor.upperCase(conversor.nome(pessoas))).toEqual([
    'JOSE',
    'CAMILA',
    'FATIMA',
    'WESLEY'
  ]);
});

test('converte lista de pessoas para lista de alunos', () => {
  expect(conversor.alunos(pessoas)).toEqual(alunos);
});
