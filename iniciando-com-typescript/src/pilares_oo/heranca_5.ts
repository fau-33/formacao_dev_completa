abstract class Celular {
  ligar() {
    console.log("Ligando...");
  }

  abstract acessarRedeMovel(): void;
}

class Iphone23Pro extends Celular {
  acessarRedeMovel(): void {
    console.log("Acessando rede móvel 7G...");
  }
}
class GalaxyS57Ultra extends Celular {
  acessarRedeMovel(): void {
    console.log("Acessando rede móvel 15G...");
  }
}

let c1 = new GalaxyS57Ultra();
c1.ligar();
c1.acessarRedeMovel();

c1 = new Iphone23Pro();
c1.ligar();
c1.acessarRedeMovel();

export {};
