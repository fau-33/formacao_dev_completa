import MenuItem from "@/components/template/MenuItem";
import { IconArrowsDown, IconForms, IconNumbers } from "@tabler/icons-react";

export default function Home() {
  return (
    <div
      className="
      flex flex-col justify-center items-center h-screen
      bg-linear-to-br from-zinc-800 to-black gap-20
    "
    >
      <div className="text-6xl">
        <span className="opacity-40 font-thin">Gereciamento de</span>
        <span
          className="
        font-black bg-linear-to-r from-blue-500 to-green-500
        bg-clip-text text-transparent
        "
        >
          {" "}
          Estado
        </span>
      </div>
      <div className="flex flex-wrap justify-around w-3/5">
        <MenuItem icone={<IconForms />} texto="Estado" url="/revisao/estado" />
        <MenuItem
          icone={<IconArrowsDown />}
          texto="Comunicação"
          url="/revisao/comunicacao"
        />
        <MenuItem icone={<IconNumbers />} texto="Basico" url="/basico" />
      </div>
    </div>
  );
}
