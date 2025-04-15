const nota1 = 7.9;
const nota2 = 2.4;
const nota3 = 6.5;

// Função para calcular a média simples
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

// Função para determinar a menor nota
function menorNota(nota1, nota2, nota3) {
  if (nota1 <= nota2 && nota1 <= nota3) {
    return nota1;
  } else if (nota2 <= nota1 && nota2 <= nota3) {
    return nota2;
  } else {
    return nota3;
  }
}

// Função para calcular a média descartando a menor nota
function mediaSemMenorNota(nota1, nota2, nota3) {
  const menor = menorNota(nota1, nota2, nota3);
  const soma = nota1 + nota2 + nota3 - menor;
  return soma / 2;
}

// Função para determinar a situação do aluno com base na média final
function situacaoFinal(nota1, nota2, nota3) {
  const media = mediaSemMenorNota(nota1, nota2, nota3);
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 4) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

// Chamada da função e exibição do resultado
console.log(situacaoFinal(nota1, nota2, nota3));
