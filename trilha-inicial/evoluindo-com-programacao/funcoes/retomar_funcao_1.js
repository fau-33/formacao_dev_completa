function externa() {
  function interna() {
    return "Estou na função interna!";
  }
  return interna;
}
console.log(externa);
console.log(externa());
console.log(externa()());

const funcaoInterna = externa();
console.log(funcaoInterna());
