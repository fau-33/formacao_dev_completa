interface RodapeProps {
  textoLeft: string;
  textoRight: string;
}
export default function Rodape(props: RodapeProps) {
  return (
    <div
      className={`
      flex justify-between items-center h-16 text-base
       border-t border-zinc-800 bg-zinc-900 text-zinc-500 px-10
      
    `}
    >
      <span>{props.textoLeft}</span>
      <span>{props.textoRight}</span>
    </div>
  );
}
