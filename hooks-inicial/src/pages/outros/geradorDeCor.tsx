import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function () {
  // 1- Mostra a div condicionalmente, a div de aparecer quando sortear cor e sumir quando apagar cor
  const [mostrarDiv, setMostrarDiv] = useState(false);
  // 2- Exibir texto nosso display: "Clique em sortear", uma cor aleatória
  const [cor, setCor] = useState("");
  // 3- Alterar a cor da div de acordo com a cor aleatória gerada
  const [corAleatoria, setCorAleatoria] = useState("");

  function gerarCorAleatoria() {
    const numeroAleatorioDecimal = Math.random() * 0xffffff;
    const cor = Math.floor(numeroAleatorioDecimal).toString(16);
    return cor;
  }

  return (
    <Pagina
      titulo="Gerador de Cor"
      subtitulo="Criando exemplos mais complexos com useLayoutEffect"
    >
      <Flex>
        <Botao
          texto="Sortear cor"
          onClick={() => {
            setMostrarDiv(true);
            setCorAleatoria(gerarCorAleatoria());
          }}
        />
        <Botao
          texto="Apagar cor"
          onClick={() => {
            setMostrarDiv(false);
            setCorAleatoria("");
          }}
        />
      </Flex>
      <Display
        texto={corAleatoria ? `#${corAleatoria}` : "Clique em sortear"}
      />
      {mostrarDiv && (
        <div
          className="h-32 w-32"
          style={{ backgroundColor: `#${corAleatoria}` }}
        ></div>
      )}
    </Pagina>
  );
}
