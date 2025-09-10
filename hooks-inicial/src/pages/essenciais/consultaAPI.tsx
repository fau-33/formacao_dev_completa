import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function () {
  // Estado para armazenar a URL da imagem do cachorro
  const [url, setUrl] = useState(); // Inicia como undefined

  // useEffect que executa apenas uma vez quando o componente é montado
  useEffect(() => {
    // Faz uma requisição HTTP para a API de cachorros aleatórios
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((obj) => setUrl(obj.message)); // Extrai a URL da imagem e salva no estado
  }, []); // Array vazio = executa apenas uma vez (componentDidMount)

  return (
    <Pagina titulo="Requisição API" subtitulo="Requirindo dados">
      {/* Exibe a imagem do cachorro quando a URL estiver disponível */}
      <img
        className="max-w-sm" // Classe Tailwind para largura máxima pequena
        src={url} // URL da imagem vinda da API
        alt="Cachorro aleatório" // Boa prática: sempre adicionar alt
      />
    </Pagina>
  );
}
