export default function Conteudo(props: any) {
  console.log(props);
  return (
    <div
      className={`
      flex justify-center items-center flex-1
      rounded-lg bg-emerald-500 text-3xl
    `}
    >
      {props.children}
    </div>
  );
}
