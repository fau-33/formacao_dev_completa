function mediaPonderada(nota1, nota2, nota3) {
  const media = (nota1 + 2 * nota3 + 3 * nota3) / 6;
  return media;
}

function mediaSimples(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

const media1 = mediaPonderada(7, 8, 9);
const media2 = mediaPonderada(5.8, 8.3, 9.5);
const mediaFinal = mediaSimples(media1, media2);
const mediaFinalInteira = Math.ceil(mediaFinal);

console.log(`A média final das notas é ${mediaFinalInteira}`);
