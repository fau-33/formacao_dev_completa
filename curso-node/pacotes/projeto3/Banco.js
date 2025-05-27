import fs from "node:fs";
import { v4 as uuidv4 } from "uuid";

let dadosManipulaveis = _carregarValores(); // formato {nome, id}

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
		const idUnico = uuidv4();
		dadosManipulaveis.push({ nome, id: idUnico });
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
