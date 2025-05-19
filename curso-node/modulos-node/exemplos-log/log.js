const simbolo = "!";
console.log("Estou no modulo log");

module.exports = {
  log: (info) => console.log(info + simbolo),
};
