export default (refeicao) => {
	const vouComer = (...alimentos) => {
		console.log(`Na refeição ${refeicao} vamos comer ${alimentos.join(", ")}`);
	};
	return vouComer;
};
