import "../app/globals.css";
import Pagina from "@/components/Pagina";

export default function TestePagina() {
  function executar() {
    console.log("Executando...");
  }
  return (
    <Pagina titulo="Minha Aplicação" subtitulo="Melhor app da web!">
      <button onClick={executar} className="botao">
        Clique aqui
      </button>
    </Pagina>
  );
}
