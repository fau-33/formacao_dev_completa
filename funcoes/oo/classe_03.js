class Data {
  #dia = 1;
  #mes = 1;
  #ano = 1970;

  // Getters e Setters

  get Dia() {
    return this.#dia;
  }
  set Dia(novoDia) {
    if (novoDia > 1 && novoDia <= 31) {
      this.#dia = novoDia;
    }
  }

  get Mes() {
    return this.#mes;
  }

  set Mes(novoMes) {
    if (novoMes > 0 && novoMes <= 12) {
      this.#mes = novoMes;
    }
  }
  get Ano() {
    return this.#ano;
  }
  set Ano(novoAno) {
    if (novoAno >= 1970 && novoAno <= 2900) {
      this.#ano = novoAno;
    }
  }

  exibir() {
    return `${this.#dia}/${this.#mes}/${this.#ano}`;
  }
}

const d1 = new Data();

d1.Dia = 25;
d1.Mes = 12;
d1.Ano = 2022;

console.log(d1.exibir());
