import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";
import Arealateral from "./Arealateral";

interface PaginaProps {
  titulo: string;
  subtitulo: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export default function Pagina(props: PaginaProps) {
  const ano = new Date().getFullYear();
  return (
    <div className="flex  h-screen">
      <Arealateral />
      <div className="flex flex-col flex-1">
        <Cabecalho
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className="h-16 bg-zinc-800"
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
