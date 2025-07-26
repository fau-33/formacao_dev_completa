class DesafioEstatico {
  nota: number = 9.8; // atributo de instância
  static notaEstatica: number = 7.8; // atributo de classe

  // metodo de classe (static)
  static executar() {
    const instancia = new DesafioEstatico();

    console.log(instancia.nota);
    console.log(DesafioEstatico.notaEstatica);
  }
}

DesafioEstatico.executar();

const outraInstancia = new DesafioEstatico();
console.log(outraInstancia.nota);
