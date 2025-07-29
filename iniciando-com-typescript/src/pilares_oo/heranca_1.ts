interface Entidade {
  id: string;
}

interface EntidadeComDatas extends Entidade {
  criadoEm?: Date; // createdAt
  atualizadoEm: Date; // updatedAt
  excluidoEm?: Date; // deletedAt
}

interface Usuario extends EntidadeComDatas {
  nome: string;
  email: string;
  senha?: string;
}

// Exemplo de Usuario
const u1: Usuario = {
  id: "aaa-123",
  nome: "João Pedro",
  email: "jjppro@zmail.com",
  criadoEm: new Date(),
  atualizadoEm: new Date(),
};

console.log(u1);
// Exemplo de Produto

interface Vendavel {
  preco: number;
  desconto: number;
}

interface Produto extends Vendavel, EntidadeComDatas {
  nome: string;
}

const p1: Produto = {
  id: "def-123",
  nome: "Tablet",
  preco: 1000,
  desconto: 0.05,
  atualizadoEm: new Date(),
};

console.log(p1);

export {};
