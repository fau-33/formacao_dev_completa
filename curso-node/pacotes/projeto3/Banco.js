import fs from "node:fs";
let dadosManipulaveis = _carregarValores(); // formato {nome, id}
const ultimoIdResgitrado =
	dadosManipulaveis[dadosManipulaveis.length - 1]?.id ?? -1;

let idGlobal = ultimoIdResgitrado + 1;

function _carregarValores() {
	const dadosJson = fs.readFileSync("banco.json", "utf8");
	const dados = JSON.parse(dadosJson);
	return dados;
}

export function persistirValores() {
	const dadosJson = JSON.stringify(dadosManipulaveis, null, 4);
	fs.writeFileSync("banco.json", dadosJson);
}
export function salvar(nome, id) {
	const indice = dadosManipulaveis.findIndex((obj) => obj.id === id);

	if (indice >= 0) {
		dadosManipulaveis[indice].nome = nome;
	} else {
		dadosManipulaveis.push({ nome, id: idGlobal });
		idGlobal++;
	}
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
