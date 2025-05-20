const receita = (ingredientes, acoes1, acoes2) => {
	let retorno = "";
	for (const ingrediente of ingredientes) {
		retorno += `${acoes1(ingrediente)}\n`;
		retorno += `${acoes2(ingrediente)}\n`;
	}
	retorno += "pronto";
	return retorno;
};

export default receita;
