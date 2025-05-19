module.exports = function (refeicao) {
  const vouComer = function (...alimentos) {
    console.log(`Na refeição ${refeicao} vamos comer ${alimentos.join(", ")}`);
  };
  return vouComer;
};
