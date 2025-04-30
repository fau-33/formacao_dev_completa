// funcao => 3 Params => mediaSimples => console.log

function mediaSimples(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`A média das notas ${nota1}, ${nota2} e ${nota3} é ${media}`);
}

mediaSimples(7, 8, 9);
mediaSimples(4.5, 9.2, 9.3);
// funcao => 3 Params => mediaPonderada => console.log

function mediaPonderada(nota1, nota2, nota3) {
  const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
  console.log(
    `A média ponderada das notas ${nota1}, ${nota2} e ${nota3} é ${media}`
  );
}

mediaPonderada(7, 8, 9);
