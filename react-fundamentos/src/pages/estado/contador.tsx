import { useState } from "react";
import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function PaginaContador() {
  const [num, setNum] = useState(0);
  const [delta, setDelta] = useState(1);

  function decrementarDelta() {
    setDelta(delta - 1);
  }

  function incrementarDelta() {
    setDelta(delta + 1);
  }

  function decrementar() {
    setNum(num - delta);
  }

  function incrementar() {
    setNum(num + delta);
  }
  return (
    <Pagina titulo="Contador" subtitulo="Capítulo estado">
      <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
        <div className="text-7xl font-black">{num}</div>
        <div className="flex gap-5">
          <button
            onClick={decrementar}
            className="bg-blue-500 p-4 rounded-full"
          >
            <IconMinus size={30} />
          </button>
          <button
            onClick={incrementar}
            className="bg-blue-700 p-4 rounded-full"
          >
            <IconPlus size={30} />
          </button>
        </div>
        <div className="flex gap-5">
          <button
            onClick={decrementarDelta}
            className="bg-purple-500 flex items-center justify-center w-9 h-9 rounded-full"
          >
            <IconMinus size={16} />
          </button>
          <span>{delta}</span>
          <button
            onClick={incrementarDelta}
            className="bg-purple-700 flex items-center justify-center w-9 h-9 rounded-full"
          >
            <IconPlus size={16} />
          </button>
        </div>
      </div>
    </Pagina>
  );
}
