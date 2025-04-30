// 4) Conte as ocorrências das palavras em um texto e exiba todas as palavras com mais
// de 6 ocorrências ordenadas em ordem decrescente
const texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis sed nisi ac sollicitudin. Ut maximus aliquam eros. Suspendisse commodo, orci in euismod volutpat, eros turpis placerat arcu, quis venenatis mi turpis a lacus. Praesent vel sapien a quam imperdiet cursus. Pellentesque feugiat mattis urna quis ultricies. Maecenas semper orci leo, a bibendum libero dapibus eu. Nullam non magna sed enim venenatis efficitur eget quis est. Nam aliquet orci congue facilisis mollis. Quisque tincidunt lorem id eros pretium laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent porta mauris enim, laoreet elementum est vehicula vel. Proin commodo, urna eu mollis semper, elit lacus fermentum mauris, a ullamcorper arcu nulla a lorem. Nulla facilisi. Nulla dolor elit, rutrum vitae metus et, consectetur interdum nisl. Sed id est scelerisque, lacinia enim at, mollis lectus. Vivamus hendrerit, justo nec consequat tristique, massa ligula tincidunt tortor, vel convallis tellus nisi vel nibh. Donec auctor, felis eu gravida pharetra, lectus sapien varius nunc, a posuere velit augue sed dui. Morbi ut fringilla ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ac mi vitae purus fermentum malesuada. Integer sit amet neque vel velit egestas rhoncus. Fusce vel dignissim odio. Aliquam erat volutpat. Nunc sit amet feugiat risus. Sed vel luctus arcu. Etiam euismod, sapien vel ultrices dictum, justo nisl tempus risus, sit amet consequat velit urna sed magna. Nulla facilisi. Aenean vitae nunc id augue blandit lacinia. Cras non est at justo bibendum tempor. Praesent quis augue vel tortor tempor luctus. Phasellus euismod, urna nec venenatis vehicula, justo elit luctus odio, id sollicitudin sapien mi vel augue. In hac habitasse platea dictumst. Nulla facilisi. Donec auctor, nisl vel fringilla iaculis, odio augue feugiat purus, nec vulputate justo diam vel purus. Duis vel sagittis nisi. Sed euismod, nisi nec tincidunt feugiat, arcu nulla tristique sapien, vel fringilla massa diam nec justo. Vivamus nec enim vel nunc eleifend finibus. Nullam vel nisl at tellus molestie bibendum. Sed non nisi vel nunc lacinia bibendum. Ut sit amet nulla vel dui vestibulum luctus. Mauris vel erat vel nulla tincidunt pretium. Sed at nisi vel nisi lobortis suscipit.";

let paragrafos = texto.split("\n");

let frases = [];

for (paragrafos of paragrafos) {
  let frasesDoParagrafo = paragrafos.split(".");
  frases.push(...frasesDoParagrafo);
}

let palavras = [];

for (frase of frases) {
  let fraseSemVirgulas = frase.replace(",", "");
  let palavrasDaFrase = fraseSemVirgulas.split(" ");
  palavras.push(...palavrasDaFrase);
}

let PalavrasOcorrencias = {};

for (palavra of palavras) {
  if (PalavrasOcorrencias[palavra]) {
    PalavrasOcorrencias[palavra]++;
  } else {
    PalavrasOcorrencias[palavra] = 1;
  }
}
console.log(PalavrasOcorrencias);

let palavrasOrdenadasArray = Object.entries(PalavrasOcorrencias);
let palavrasCom6Ocorrencias = [];

for (par of palavrasOrdenadasArray) {
  if (par[1] >= 6 && par[0] != "") {
    palavrasCom6Ocorrencias.push(par[0]);
  }
}

function ordenacao(str1, str2) {
  if (str1 > str2) {
    return -1;
  } else if (str2 > str1) {
    return 1;
  } else {
    return 0;
  }
}

console.log(palavrasCom6Ocorrencias.sort(ordenacao));

// console.log(
//   palavrasOrdenadas
//     .slice(0, 6)
//     .map((item) => item[0])
//     .join(", ")
// );
