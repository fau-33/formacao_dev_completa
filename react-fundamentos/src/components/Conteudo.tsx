interface ConteudoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}
export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
      flex items-start flex-1 p-4
      rounded-lg bg-emerald-500 text-3xl
    `}
    >
      {props.children}
    </div>
  );
}
