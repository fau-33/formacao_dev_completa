// Calbacks

setTimeout(() => {
  console.log("Executou!");
  setTimeout(() => {
    console.log("Executou 2!");
    setTimeout(() => {
      console.log("Executou 3!");
      setTimeout(() => {
        console.log("Executou 4!");
      });
    });
  });
}, 2000);

// Promises

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Executou a promisse!");
      resolve();
    }, tempo);
  });
}

esperarPor().then(esperarPor).then(esperarPor).then(esperarPor);
