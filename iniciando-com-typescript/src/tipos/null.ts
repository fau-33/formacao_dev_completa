type Usuario1 = { nome: string; email: string };

const usuarios: Usuario1[] = [
  { nome: "João Pedro", email: "jjppro@zmail.com" },
  { nome: "Maria Silva", email: "mariasilva@zmail.com" },
  { nome: "Pedro Silva", email: "pedrosilva@zmail.com" },
  { nome: "Joaquim Silva", email: "joaquimsilva@zmail.com" },
  { nome: "Fernando Silva", email: "fernandosilva@zmail.com" },
  { nome: "Amanda Silva", email: "amandasilva@zmail.com" },
];

function buscarPorEmail(email: string): Usuario1 | null {
  return usuarios.find((u) => u.email === email) || null;
}

const usuarioPorEmail = buscarPorEmail("jjppro@zmail.com");
console.log(usuarioPorEmail);
