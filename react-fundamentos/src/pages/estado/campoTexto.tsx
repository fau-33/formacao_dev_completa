import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaComTexto() {
  const [valor, setValor] = useState("Inicial...");
  function alterar() {
    setValor(`${Math.random()}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function alterarValor(e: any) {
    setValor(e.target.value);
  }

  return (
    <Pagina titulo="Campo Texto" subtitulo="Capitulo com Campo Texto">
      <div className="flex flex-col items-start gap-5">
        <input
          onChange={alterarValor}
          type="text"
          className="campo"
          value={valor}
        />
        <button onClick={alterar} className="bg-blue-500 p-2 rounded-md">
          Alterar
        </button>
        <span>{valor}</span>
      </div>
    </Pagina>
  );
}
