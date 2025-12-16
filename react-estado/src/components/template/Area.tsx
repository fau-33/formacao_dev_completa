interface AreaProps {
  titulo: string;
  sumario?: string;
  children: any;
  cor: string;
}

export default function Area(props: AreaProps) {
  const cores: Record<string, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    zinc: "bg-zinc-500",
    amber: "bg-amber-500",
    purple: "bg-purple-500",
  };

  return (
    <div
      className={`flex flex-col items-center ${
        cores[props.cor] ?? "bg-zinc-500"
      }
        rounded-md w-full
        `}
    >
      <div
        className={`
            flex items-center ${
              props.sumario ? "justify-between" : "justify-center"
            }
            bg-opacity-20 w-full bg-black h-14 text-3xl font-black opacity-70
        `}
      >
        <span className="px-4">{props.titulo}</span>
        {props.sumario && (
          <span
            className="
            flex items-center px-4
            bg-black bg-opacity-20 h-full
        "
          >
            {props.sumario}
          </span>
        )}
      </div>
      <div className="p-7">{props.children}</div>
    </div>
  );
}
