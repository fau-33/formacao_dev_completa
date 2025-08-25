interface MenuItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icone: any;
  texto: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div className="flex gap-2 items-center my-1 py-1 px-3 text-zinc-300">
      <span>{props.icone}</span>
      <span className="text-sm">{props.texto}</span>
    </div>
  );
}
