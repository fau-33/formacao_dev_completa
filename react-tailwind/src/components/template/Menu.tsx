import { IconNumbers } from "@tabler/icons-react";
import MenuGrupo from "./MenuGrupo";
import MenuItem from "./MenuItem";

interface MenuProps {
  className?: string;
}

export default function Menu(props: MenuProps) {
  return (
    <div
      className={`p-7
      ${props.className ?? ""}
    `}
    >
      <MenuGrupo texto="Conceitos" />
      <MenuItem icone={<IconNumbers />} texto="Classes" url="/" />
      <MenuItem icone={<IconNumbers />} texto="Classes" url="/" />
      <MenuItem icone={<IconNumbers />} texto="Classes" url="/" />
      <MenuGrupo texto="Box Model" />
      <MenuGrupo texto="Flex" />
      <MenuGrupo texto="Grid" />
      <MenuGrupo texto="Extras" />
    </div>
  );
}
