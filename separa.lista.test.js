const separador = require('./separa.lista');

const cursos = [
  {
    descricao: 'Fechamento de Caixa',
    categoria: 'Financeiro',
    duracao: 100,
    professor: 'Cestaro'
  },
  {
    descricao: 'Contabilidade Básica',
    categoria: 'Contabilidade',
    duracao: 70
  },
  {
    descricao: 'Balancete',
    categoria: 'Contabilidade',
    duracao: 90
  },
  {
    descricao: 'Recebimento de Mercadorias',
    categoria: 'Comercial',
    duracao: 80
  }
];

test('separar os cursos por categoria', () => {
  expect(separador.categoria(cursos, 'Financeiro')).toContain(cursos[0]);
  expect(separador.categoria(cursos, 'Contabilidade')).toContain(cursos[1]);
  expect(separador.categoria(cursos, 'Contabilidade')).toContain(cursos[2]);
  expect(separador.categoria(cursos, 'Comercial')).toContain(cursos[3]);
});

test('separar os cursos por duracao', () => {
  expect(separador.duracaoMaiorQue(cursos, 80)).toContain(cursos[0]);
  expect(separador.duracaoMaiorQue(cursos, 80)).toContain(cursos[2]);

  expect(separador.duracaoMenorQue(cursos, 80)).toContain(cursos[1]);
});

test('separar os cursos que tem professor', () => {
  expect(separador.comProfessor(cursos)).toContain(cursos[0]);
});

test('separar os cursos que não tem professor', () => {
  expect(separador.semProfessor(cursos)).toContain(cursos[1]);
  expect(separador.semProfessor(cursos)).toContain(cursos[2]);
  expect(separador.semProfessor(cursos)).toContain(cursos[3]);
});

test('separar os cursos por expressão regular', () => {
  expect(separador.descricao(cursos, /de/)).toContain(cursos[0]);
  expect(separador.descricao(cursos, /de/)).toContain(cursos[3]);
});
