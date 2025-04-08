const emBlackFriday = false;
const temEstoque = true;
const temPerfilFuncionario = true;

const temEstoqueMaximo = (emBlackFriday && temEstoque) || temPerfilFuncionario;
console.log("Permite desconto máximo? ", temEstoqueMaximo);
