abstract class Animal {
  abstract emitirSom(): string;
}

class Gato extends Animal {
  emitirSom(): string {
    return "Miau";
  }
}

class Cachorro extends Animal {
  emitirSom(): string {
    return "Au au";
  }
}

function exibir(animal: Animal) {
  console.log(animal.emitirSom());
}

let a: Animal = new Gato();
exibir(a);

a = new Cachorro();
exibir(a);

export {};
