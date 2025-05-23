let dadosManipulaveis = []; // formato {nome, id}

export function salvar(nome, id) {
  dadosManipulaveis.push({ nome, id });
}
export function deletar(id) {
  const dadosFiltrados = dadosManipulaveis.filter((dado) => dado.id !== id);
  dadosManipulaveis = dadosFiltrados;
}
export function pegaDados() {
  const dadosImprimiveis = dadosManipulaveis.map((dado) => {
    return `${dado.id} - ${dado.nome}`;
  });
  return dadosImprimiveis;
}
