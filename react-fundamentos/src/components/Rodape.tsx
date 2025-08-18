interface RodapeProps {
  textoLeft: string;
  textoRight: string;
}
export default function Rodape(props: RodapeProps) {
  return (
    <div
      className={`
      flex justify-between items-center h-16
      rounded-lg bg-cyan-600 text-xl px-10
      
    `}
    >
      <span>{props.textoLeft}</span>
      <span>{props.textoRight}</span>
    </div>
  );
}
