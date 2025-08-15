import Cabecalho from "@/components/Cabecalho";
import "../app/globals.css";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";

export default function Pagina() {
  const ano = new Date().getFullYear();
  return (
    <div
      className={`
      flex flex-col h-screen
      p-5 gap-5
      bg-black text-white
    `}
    >
      <Cabecalho titulo="Minha Página" subtitulo="Estou na pasta pages!" />
      <Conteudo>
        <button className="bg-blue-500 p-2 rounded-md">Clique aqui</button>
      </Conteudo>
      <Rodape
        textoLeft="Feito com ❤ por Flávio Félix Formação.DEV"
        textoRight={`Todos os direitos reservados ${ano}`}
      />
    </div>
  );
}
