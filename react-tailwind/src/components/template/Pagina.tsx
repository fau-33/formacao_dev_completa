import Menu from "./Menu";

interface PaginaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex">
      <Menu className="bg-zinc-900 w-72 h-screen" />
      <div className="p-7">{props.children}</div>
    </div>
  );
}
