export default function Rodape(props: any) {
  return (
    <div
      className={`
      flex justify-between items-center h-36
      rounded-lg bg-cyan-600 text-xl px-10
      
    `}
    >
      <span>{props.textoLeft}</span>
      <span>{props.textoRight}</span>
    </div>
  );
}
