// Lista exercicios JS
// 1) Uma professora tem que entregar as notas dos alunos. Cada aluno tem quatro
// matérias e quatro notas em cada:
// {
// nome: "Joaozinho",
// materias: [
// {
// nome: "Português",
// notas: [7.4, 5.6, 10, 9],
// },
// {
// nome: "Matemática",
// notas: [4.4, 5.0, 8.2, 7.0],
// },
// {
// nome: "Ciências",
// notas: [8.2, 7.6, 8.0, 6.3],
// },
// {
// nome: "Estudos Sociais",
// notas: [9.2, 7.6, 8.5, 7.0],
// },
// ],
// };
// E essa entrega tem que ser feita de diferentes maneiras
// Pra diretoria ela deve entregar um objeto com o nome do aluno e as médias desse
// aluno em cada uma das matérias
// Pro aluno ela deve entregar um objeto com o nome do aluno e se o aluno foi
// aprovado, reprovado ou está de recuperação em cada matéria que cursou. (nota >
// 7
// aprovado; nota < 7 e ≥ 5
// recuperação, nota < 5
// reprovado)
// ⇒
// ⇒
// ⇒
// Pros pais do aluno ela deve dizer apenas se o aluno foi aprovado, reprovado ou se
// está de recuperação. Se o aluno for aprovado em todas as matérias, ele está
// Lista exercicios JS
// 1aprovado, se ficou de recuperação em uma ou duas matérias e está aprovado nas
// outras duas, está de recuperação caso contrário, está reprovado.

const alunos = [
  {
    nome: "Joaozinho",
    materias: [
      {
        nome: "Português",
        notas: [7.4, 5.6, 10, 9],
      },
      {
        nome: "Matemática",
        notas: [4.4, 5.0, 8.2, 7.0],
      },
      {
        nome: "Inglês",
        notas: [8.2, 7.6, 8.0, 6.3],
      },
      {
        nome: "Estudos Sociais",
        notas: [9.2, 7.6, 8.5, 7.0],
      },
    ],
  },
];

// 1 - Pra diretoria ela deve entregar um objeto com o nome do aluno e as médias desse aluno em cada uma das matérias

const diretoria = alunos.map((aluno) => {
  return {
    nome: aluno.nome,
    médias: aluno.materias.map((materia) => {
      return {
        nome: materia.nome,
        media:
          materia.notas.reduce((acc, nota) => acc + nota, 0) /
          materia.notas.length,
      };
    }),
  };
});

// console.log(JSON.stringify(diretoria, null, 2));

// Pro aluno ela deve entregar um objeto com o nome do aluno e se o aluno foi
// aprovado, reprovado ou está de recuperação em cada matéria que cursou. (nota >
// 7
// aprovado; nota < 7 e ≥ 5
// recuperação, nota < 5
// reprovado)

const aluno = alunos.map((aluno) => {
  return {
    nome: aluno.nome,
    materias: aluno.materias.map((materia) => {
      // Calcula a média das notas da matéria
      const media =
        materia.notas.reduce((acc, nota) => acc + nota, 0) /
        materia.notas.length;

      // Determina o resultado com base na média
      let resultado;
      if (media > 7) {
        resultado = "aprovado";
      } else if (media >= 5 && media <= 7) {
        resultado = "recuperação";
      } else {
        resultado = "reprovado";
      }

      // Retorna o nome da matéria e o resultado
      return {
        nome: materia.nome,
        resultado: resultado,
      };
    }),
  };
});

// Exibir o resultado formatado no console
console.log(JSON.stringify(aluno, null, 2));

// console.log(JSON.stringify(aluno, null, 2));

// Pros pais do aluno ela deve dizer apenas se o aluno foi aprovado, reprovado ou se
// está de recuperação. Se o aluno for aprovado em todas as matérias, ele está
// 1aprovado, se ficou de recuperação em uma ou duas matérias e está aprovado nas
// outras duas, está de recuperação caso contrário, está reprovado.

const pais = alunos.map((aluno) => {
  // Calcula o resultado de cada matéria
  const resultados = aluno.materias.map((materia) => {
    const media =
      materia.notas.reduce((acc, nota) => acc + nota, 0) / materia.notas.length;

    if (media > 7) {
      return "aprovado";
    } else if (media >= 5 && media <= 7) {
      return "recuperação";
    } else {
      return "reprovado";
    }
  });

  // Conta quantas matérias estão em cada estado
  const aprovados = resultados.filter(
    (resultado) => resultado === "aprovado"
  ).length;
  const recuperacao = resultados.filter(
    (resultado) => resultado === "recuperação"
  ).length;
  const reprovados = resultados.filter(
    (resultado) => resultado === "reprovado"
  ).length;

  // Determina o status geral do aluno
  let statusGeral;
  if (aprovados === aluno.materias.length) {
    statusGeral = "aprovado"; // Aprovado em todas as matérias
  } else if (recuperacao >= 1 && recuperacao <= 2 && reprovados === 0) {
    statusGeral = "recuperação"; // Recuperação em uma ou duas matérias
  } else {
    statusGeral = "reprovado"; // Reprovado caso contrário
  }

  // Retorna o resultado para os pais
  return {
    nome: aluno.nome,
    status: statusGeral,
  };
});

// Exibir o resultado formatado no console
// console.log(JSON.stringify(pais, null, 2));
