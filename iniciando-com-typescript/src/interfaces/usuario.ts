interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
}

const usuarioLogado: Usuario = {
  id: 1,
  nome: "João Pedro",
  email: "jjppro@zmail.com",
  senha: "123456",
};

console.log(usuarioLogado.id);
console.log(usuarioLogado.nome);
console.log(usuarioLogado.email);

const usuarioOpcional: Partial<Usuario> = {
  id: 2,
  nome: "Jaime Silva",
  email: "jaimesilva@zmail.com",
};

console.log(usuarioOpcional.id);
console.log(usuarioOpcional.nome);
console.log(usuarioOpcional.email);
console.log(usuarioOpcional.senha);

const usuarioCompleto: Required<Usuario> = {
  id: 3,
  nome: "Maria Silva",
  email: "mariasilva@zmail.com",
  senha: "123456",
};

console.log(usuarioCompleto.id);
console.log(usuarioCompleto.nome);
console.log(usuarioCompleto.email);
console.log(usuarioCompleto.senha);

export {};
