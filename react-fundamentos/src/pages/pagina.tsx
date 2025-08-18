import "../app/globals.css";
import Pagina from "@/components/Pagina";

export default function TestePagina() {
  function executar() {
    console.log("Executando...");
  }
  return (
    <Pagina titulo="Minha Aplicação" subtitulo="Melhor app da web!">
      <button onClick={executar} className="bg-blue-500 p-2 rounded-md">
        Clique aqui
      </button>
    </Pagina>
  );
}
