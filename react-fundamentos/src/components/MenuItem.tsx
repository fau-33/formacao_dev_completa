import Link from "next/link";

interface MenuItemProps {
  texto: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icone: any;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className={`
        px-4 py-2 flex items-center gap-4
        text-base w-full rounded-md hover:bg-zinc-800
    `}
    >
      <span>{props.icone}</span>
      <span>{props.texto}</span>
    </Link>
  );
}
