import { salvar, deletar, pegaDados, persistirValores } from "./Banco.js";
import {
	finaliza,
	menu,
	le,
	textoAzul,
	textoVerde,
	menuSelecaoUsuario,
} from "./Interface.js";

const itensMenu = [
	" Adicionar ",
	" Editar ",
	" Deletar ",
	" Ver todos ",
	" Persistir ",
	" Sair ",
];

let nome;
let id;

while (true) {
	const selecionado = await menu(itensMenu);
	switch (selecionado.trim().toLowerCase()) {
		case "adicionar": {
			nome = await le("Qual o nome do usuário?");
			salvar(nome);
			textoAzul("Salvo com sucesso!");
			break;
		}
		case "editar": {
			id = await menuSelecaoUsuario(pegaDados());
			nome = await le("Nome atualizado: ");
			salvar(nome, id);
			textoAzul("Salvo com sucesso!");
			break;
		}
		case "deletar": {
			id = await menuSelecaoUsuario(pegaDados());
			deletar(id);
			textoVerde("Deletado com sucesso!");
			break;
		}
		case "ver todos": {
			const dados = pegaDados();
			textoAzul(dados);
			break;
		}
		case "persistir":
			persistirValores();
			textoVerde("Persistido com sucesso!");
			break;
		case "sair":
			finaliza();
			textoVerde("Saindo... até mais!");
			break;
		default:
			console.log(`${selecionado.trim().toLowerCase()} não é válido`);
	}
}
