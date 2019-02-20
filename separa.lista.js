function categoria(cursos, categoria) {
  return cursos.filter((cursos) => {
    if(cursos.categoria == categoria){
      return cursos
    }
  })
}

function duracaoMaiorQue(cursos, duracao) {
  return cursos.filter((cursos) => {
    if(cursos.duracao > duracao){
      return cursos
    }
  })
}

function duracaoMenorQue(cursos, duracao) {
  return cursos.filter((cursos) => {
    if(cursos.duracao < duracao){
      return cursos
    }
  })
}

function comProfessor(cursos) {
  return cursos.filter((cursos) => {
    if(cursos.professor){
      return cursos
    }
  })
}

function semProfessor(cursos) {
  return cursos.filter((cursos) => {
    if(!cursos.professor){
      return cursos
    }
  })
}

function descricao(cursos, regex) {
  return cursos.filter((cursos) => cursos.descricao.match(regex))
}

module.exports = {
  categoria,
  duracaoMaiorQue,
  duracaoMenorQue,
  comProfessor,
  semProfessor,
  descricao
};
