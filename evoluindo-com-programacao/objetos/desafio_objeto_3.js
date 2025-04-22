// Fazer o objeto acima e colocar na função construtora

function mediaDeUmArray(notas) {
  if (!Array.isArray(notas)) return null;

  let total = 0;
  for (let nota of notas) {
    total += nota;
  }
  return total / notas.length;
}

function Aluno(nome, disciplinas) {
  this.nome = nome;
  this.disciplinas = disciplinas;

  this.media = function (nomeDisciplina) {
    for (let disciplina of this.disciplinas) {
      if (disciplina.nome.toLowerCase() === nomeDisciplina.toLowerCase()) {
        return mediaDeUmArray(disciplina.notas);
      }
    }
    return null;
  };

  this.mediaGlobal = function () {
    const medias = [];
    for (let disciplina of this.disciplinas) {
      medias.push(mediaDeUmArray(disciplina.notas));
    }
    return mediaDeUmArray(medias);
  };
}

const aluno2 = new Aluno("Leandro Felix", [
  { nome: "Matemática", notas: [7.5, 8.5, 9.5] },
  { nome: "Português", notas: [4.5, 5, 6.5] },
  { nome: "Inglês", notas: [8.5, 9.5, 10] },
]);

console.log(aluno2.media("matemática"));
console.log(aluno2.media("português"));
console.log(aluno2.media("inglês"));

console.log(aluno2.mediaGlobal());
