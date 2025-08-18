import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Pagina(props: any) {
  const ano = new Date().getFullYear();
  return (
    <div className="flex gap-4 p-4 h-screen">
      <Menu />
      <div className="flex flex-col flex-1 gap-4">
        <Cabecalho
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className="h-24 bg-gradient-to-r from-blue-700 to-zinc-900"
        />
        <Conteudo>{props.children}</Conteudo>
        <Rodape
          textoLeft="Feito com ❤ por Flávio Félix Formação.DEV"
          textoRight={`Todos os direitos reservados ${ano}`}
        />
      </div>
    </div>
  );
}
