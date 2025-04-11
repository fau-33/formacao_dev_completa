//Um aluno faltou 18 vezes no total de 223 aulas no ano
// Notas: 5.8, 8.1, 6.9

// O aluno foi aprovado ?
// Média maior ou igual 7 e frequência maior 80%

// Dados do aluno
const nota1 = 5.8;
const nota2 = 8.1;
const nota3 = 6.9;
const faltas = 18;
const totalAulas = 223;

// Cálculo da frequência (em porcentagem)
const frequencia = ((totalAulas - faltas) / totalAulas) * 100;

// Cálculo da média aritmética das 3 notas
const media = (nota1 + nota2 + nota3) / 3;

// Critérios de aprovação:
// - Média >= 7 (sem arredondamento)
// - Frequência >= 80%
const aprovado = media >= 7 && frequencia >= 80 ? "Sim" : "Não";

// Exibição dos resultados
console.log(`Média: ${media.toFixed(2)}`); // Mostra a média com 2 casas decimais
console.log(`Frequência: ${frequencia.toFixed(2)}%`); // Mostra a frequência com 2 casas decimais
console.log(`Aprovado? ${aprovado}`);
