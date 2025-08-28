import React from "react";

interface MenuItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icone: any;
  texto: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div
      className="flex gap-2 items-center rouded-md
      py-2 px-3 text-zinc-300 hover:bg-black"
    >
      <span>{React.cloneElement(props.icone, { stroke: 1 })}</span>
      <span className="text-sm">{props.texto}</span>
    </div>
  );
}
