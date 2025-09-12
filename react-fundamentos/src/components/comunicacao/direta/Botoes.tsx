import { useState } from "react";
import Valor from "./Valor";

export default function Botoes() {
  const [nome, setNome] = useState("");
  return (
    <div className="flex flex-col gap-5 bg-green-800 p-4 rounded-md m-2">
      <div className="flex gap-5">
        <button
          className="bg-purple-600 px-4 py-2 text-white roudend-md"
          onClick={() => setNome("Maria")}
        >
          Maria
        </button>
        <button
          className="bg-purple-600 px-4 py-2 text-white rounded-md"
          onClick={() => setNome("João")}
        >
          João
        </button>
        <button
          className="bg-purple-600 px-4 py-2 text-white roudend-md"
          onClick={() => setNome("Pedro")}
        >
          Pedro
        </button>
      </div>
      <Valor texto={nome} />
    </div>
  );
}
