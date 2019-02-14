const media = function () {
  return (this.primeiraProva + this.segundaProva) / 2;
};

function mediaTurma(alunos) {
    return alunos.map(i => i.notaFinal).reduce((prev, cur) => prev + cur) / alunos.length;
}


function ordenaPelaNotaAsc(alunos) {
    return alunos.sort( (a,b) => a.notaFinal - b.notaFinal);
}

module.exports = {
  media,
  mediaTurma,
  ordenaPelaNotaAsc
};
