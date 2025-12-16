import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId } from "react";

export default function () {
  let id = useId();
  return (
    <Pagina titulo="Conheçendo o useId" subtitulo="Usando useId no formulário">
      <Flex center>
        <label className="m-1" htmlFor={`nome-${id}`}>
          Nome:
        </label>
        <input
          id={`nome-${id}`}
          className="m-2 text-gray-600 p-2 rounded-md"
          type="text"
        />
      </Flex>
      <Flex center>
        <label className="m-4" htmlFor={`sobrenome-${id}`}>
          Sobrenome:
        </label>
        <input
          id={`sobrenome-${id}`}
          className="m-2 text-gray-600 p-2 rounded-md"
          type="text"
        />
      </Flex>
    </Pagina>
  );
}
