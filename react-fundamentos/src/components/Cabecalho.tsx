interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
  className?: string;
}
export default function Cabecalho(props: CabecalhoProps) {
  return (
    <div
      className={`
        border-b border-zinc-700
        flex flex-col justify-center px-5 ${props.className ?? ""}
      
    `}
    >
      <h1 className="text-2xl font-black">{props.titulo}</h1>
      <h2 className="text-sm text-zinc-400 ">{props.subtitulo}</h2>
    </div>
  );
}
