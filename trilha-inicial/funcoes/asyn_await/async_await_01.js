function esperaPor(tempo) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, tempo);
  });
}

function executarPromises() {
  esperaPor(2000)
    .then(() => console.log("[Promise] Executou depois de 2s!"))
    .then(esperaPor(3000))
    .then(() => console.log("[Promise] Executou depois de 3s!"))
    .then(esperaPor(1500))
    .then(() => console.log("[Promise] Executou depois de 1.5s!"));
}

async function executarAsync() {
  await esperaPor(2000);
  console.log("[Async/Await] Executou depois de 2s!");
  await esperaPor(3000);
  console.log("[Async/Await] Executou depois de 3s!");
  await esperaPor(1500);
  console.log("[Async/Await] Executou depois de 1.5s!");
}

executarPromises();
executarAsync();
