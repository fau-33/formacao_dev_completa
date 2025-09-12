import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function () {
  // Estados para armazenar os dois números e o maior valor
  const [n1, setN1] = useState(0); // Primeiro número, inicia com 0
  const [n2, setN2] = useState(0); // Segundo número, inicia com 0
  const [maior, setMaior] = useState(0); // Armazena qual é o maior número

  // Função que compara os dois números e retorna o maior
  function calculaMaior() {
    return n1 > n2 ? n1 : n2; // Operador ternário: se n1 > n2, retorna n1, senão n2
  }

  // useEffect 1: Recalcula o maior número sempre que n1 ou n2 mudarem
  useEffect(() => {
    let m = calculaMaior(); // Chama a função para calcular o maior
    setMaior(m); // Atualiza o estado 'maior' com o resultado
  }, [n1, n2]); // Dependências: executa quando n1 OU n2 mudarem

  // useEffect 2: Log no console para debug - mostra os valores atuais
  useEffect(() => {
    console.log(`N1: ${n1}, N2: ${n2}, Maior: ${maior}`);
  }, [n1, n2, maior]); // Executa quando qualquer um dos três valores mudar

  // useEffect 3: Alerta quando o maior número passar de 5
  useEffect(() => {
    if (maior > 5) {
      window.alert("Os numeros estão ficando altos!"); // Mostra alerta no navegador
    }
  }, [maior]); // Executa apenas quando 'maior' mudar

  return (
    <Pagina>
      {/* Componente que exibe os valores atuais */}
      <Display
        texto={`N1: ${n1} - N2: ${n2} `} // Texto principal
        textoComplementar={`O maior número é: ${maior}`} // Texto secundário
      />

      {/* Container flexível para os botões */}
      <Flex gap={5}>
        {/* Botão para incrementar N1 */}
        <Botao
          redondo
          tamanho="2xl"
          cor="bg-red-500" // Cor vermelha
          texto="N1"
          onClick={() => setN1(n1 + 1)} // Incrementa n1 em 1 a cada clique
        />

        {/* Botão para incrementar N2 */}
        <Botao
          redondo
          tamanho="2xl"
          cor="bg-blue-500" // Cor azul
          texto="N2"
          onClick={() => setN2(n2 + 1)} // Incrementa n2 em 1 a cada clique
        />
      </Flex>
    </Pagina>
  );
}
