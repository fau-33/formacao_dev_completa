const gritar = (texto) => texto.toUpperCase();
const enfatizar = (texto) => texto + `!!!`;
const exagerar = (texto) => texto.split("").join(" ");

const frases = ["Olá", "Olá, tudo bem?", "Olá, tudo bem com você?"];

const final = frases.map(gritar).map(enfatizar).map(exagerar);

console.log(final);
