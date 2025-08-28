import Menu from "./Menu";
import UsuarioInfo from "./UsuarioInfo";

interface PaginaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export default function Pagina(props: PaginaProps) {
  const usuario = {
    nome: "Frankie Sullivan",
    email: "frankie@untitledui.com",
    imagemUrl:
      "https://cdn-icons-png.freepik.com/512/15715/15715953.png?ga=GA1.1.579243390.1742089809",
  };
  return (
    <div className="flex h-screen">
      <aside className="  flex flex-col bg-zinc-900 w-72">
        <Menu className="p-7" />
        <hr className="mx-7 border-zinc-700" />
        <UsuarioInfo {...usuario} className="p-7" />
      </aside>
      <div className="p-7">{props.children}</div>
    </div>
  );
}
