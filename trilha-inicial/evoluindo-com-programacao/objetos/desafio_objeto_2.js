// Função auxiliar para calcular a média de um array de notas
function mediaDeUmArray(notas) {
  if (!Array.isArray(notas)) return null;

  let total = 0;
  for (let nota of notas) {
    total += nota;
  }
  return total / notas.length;
}

// Objeto Aluno
const aluno = {
  nome: "Leandro Felix",
  disciplinas: [
    { nome: "Matemática", notas: [7.5, 8.5, 9.5] },
    { nome: "Português", notas: [4.5, 5, 6.5] },
    { nome: "Inglês", notas: [8.5, 9.5, 10] },
  ],

  // Método para calcular a média de uma disciplina específica
  media: function (nomeDisciplina) {
    for (let disciplina of this.disciplinas) {
      if (disciplina.nome.toLowerCase() === nomeDisciplina.toLowerCase()) {
        return mediaDeUmArray(disciplina.notas);
      }
    }
    return null; // Retorna null se a disciplina não for encontrada
  },

  // Método para calcular a média global do aluno
  mediaGlobal: function () {
    const medias = [];
    for (let disciplina of this.disciplinas) {
      medias.push(mediaDeUmArray(disciplina.notas));
    }
    return mediaDeUmArray(medias);
  },
};

console.log(aluno.nome);

console.log(aluno.media("matemática"));
console.log(aluno.media("português"));
console.log(aluno.media("inglês"));

console.log(aluno.mediaGlobal());
