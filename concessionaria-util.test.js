const calendarioUtil = require('./concessionaria-util');

test('verifica se é um golf', (done) => {
  calendarioUtil
  .ehGolf('golf')
  .then((resultado) => {
    expect(resultado).toBe(true);
  }).then(done);
});


test('verifica que não é um golf', (done) => {
  calendarioUtil
  .ehGolf('civic')
  .then((resultado) => {
    expect(resultado).toBe(false);
  }).then(done);
});

test('dá erro quando não enviar parametro', (done) => {
  calendarioUtil
  .ehGolf()
  .then(() => {
    done.fail(new Error('Não deveria chegar aqui!'))
  }).catch((msg) => {
    expect(msg).toBe('Não foi informada nenhum carro!');
    done();
  });
});


