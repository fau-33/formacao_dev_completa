interface CaixaProps {
  children: any;
  className?: string;
}

export default function Caixa(props: CaixaProps) {
  return (
    <div
      className={`
        bg-red-500 roundede-md
      ${props.className ?? ""}
    `}
    >
      {props.children}
    </div>
  );
}
