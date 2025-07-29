interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string;
}

interface casosDeUso {
  executar(entrada: any): any;
}

class RegistrarUsuario implements casosDeUso {
  executar(entrada: Usuario): any {
    console.log(`Registrando o usuário ${entrada.id}`);
  }
}

const u1: Usuario = {
  id: 1,
  nome: "João Pedro",
  email: "jjppro@zmail.com",
  senha: "123456",
};

const casosDeUso: casosDeUso = new RegistrarUsuario();
casosDeUso.executar(u1);

console.log(u1);

export {};
