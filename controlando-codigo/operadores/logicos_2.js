const produtoFragil = true;
const produtoAltoCusto = false;

console.log(produtoFragil && produtoAltoCusto);
console.log(produtoFragil || produtoAltoCusto);
console.log(produtoFragil != produtoAltoCusto);
console.log(!produtoFragil);

//Em javascript 0 é false e != 0 é true

//Truque!!
console.log(!!3); //true
console.log(!!!-30000001); //true
