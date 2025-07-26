export default class Validador {
  static readonly ERRO_DESCONHECIDO = "Erro desconhecido";
  static maiorQueZero(n: number, msgErro: string): void {
    if (n <= 0) throw new Error(msgErro);
  }

  static tamanhoEntre(
    n: string,
    min: number,
    max: number,
    msgErro: string
  ): void {
    Validador.entre(n.length, min, max, msgErro);
  }

  static entre(n: number, min: number, max: number, msgErro: string): void {
    if (n < min || n > max) throw new Error(msgErro);
  }
}
