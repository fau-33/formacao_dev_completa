import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

export default function Page() {
  const ano = new Date().getFullYear();
  return (
    <div
      className={`
      flex flex-col gap-4
      p-4 h-screen
    `}
    >
      <Cabecalho titulo="Minha Aplicação" subtitulo="Melhor app da web!" />
      <div className="flex flex-1 gap-4">
        <Menu />
        <Conteudo>
          <ul className="list-disc">
            <li>Ana</li>
            <li>Gustavo</li>
            <li>Flávio</li>
            <li>João</li>
          </ul>
        </Conteudo>
      </div>
      <Rodape
        textoLeft="Feito com ❤ por Flávio Félix Formação.DEV"
        textoRight={`Todos os direitos reservados ${ano}`}
      />
    </div>
  );
}
