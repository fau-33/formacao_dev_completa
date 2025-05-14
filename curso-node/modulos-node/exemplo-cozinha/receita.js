module.exports = function (ingredientes, acoes1, acoes2) {
  let retorno = "";
  for (let ingrediente of ingredientes) {
    retorno += acoes1(ingrediente) + "\n";
    retorno += acoes2(ingrediente) + "\n";
  }
  retorno += "pronto";
  return retorno;
};
