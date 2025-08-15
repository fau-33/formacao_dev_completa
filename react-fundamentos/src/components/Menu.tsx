import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
    flex flex-col justify-start items-center w-52
    rounded-lg bg-zinc-700 text-3xl p-2 gap-2
    `}
    >
      <MenuItem texto="Página #1" url="/fundamentos/pagina" />
      <MenuItem texto="Página #2" url="/pagina" />
    </div>
  );
}
