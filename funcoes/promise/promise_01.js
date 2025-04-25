const minhaPromise = new Promise(function (resolve) {
  resolve("Vamos jogar bola !");
});

minhaPromise.then((valor) => console.log(valor));

console.log("Fim!");
