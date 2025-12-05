import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState, useEffect, useReducer, Reducer } from "react";

function mudaDados(estadoAtual: any, acao: any) {
  switch (acao.type) {
    case "ALTERA_N1":
      window.alert("Alterando N1");
      return { ...estadoAtual };
  }
}

export default function () {
  const [dados, dispatchDados] = useReducer<Reducer<any, any>>(mudaDados, {
    n1: 0,
    n2: 0,
    validadeN1: false,
    validadeN2: false,
    soma: 0,
  });

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [validadeN1, setValidadeN1] = useState(false);
  const [validadeN2, setValidadeN2] = useState(false);
  const [soma, setSoma] = useState(0);

  // 2 - Linkar os estados com os inputs
  const handleInput1 = (e: any) => {
    setN1(+e.target.value);
  };

  const handleInput2 = (e: any) => {
    setN2(+e.target.value);
  };

  // 3 - Monitorar as validades dos numeros. O numero sera valido se for > 0
  useEffect(() => {
    setValidadeN1(n1 > 0);
    setValidadeN2(n2 > 0);
  }, [n1, n2]);

  // 4 - Fazer a soma clicando no botao se os numeros forem validos. -999
  const handleSomaClick = () => {
    if (validadeN1 && validadeN2) {
      setSoma(n1 + n2);
    } else {
      setSoma(-999);
    }
  };

  return (
    <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
      <Flex col centerCross>
        <Display texto="Faça uma soma"></Display>
        <Flex center>
          <InputFormatado
            tipo="number"
            valor={dados.n1}
            onInput={handleInput1}
          ></InputFormatado>
          <span className="text-4xl ml-2">+</span>
          <InputFormatado
            tipo="number"
            valor={dados.n2}
            onInput={() => dispatchDados({ type: "ALTERA_N1" })}
          ></InputFormatado>
          <Botao
            cor="bg-orange-400"
            texto="="
            onClick={handleSomaClick}
          ></Botao>
        </Flex>
        <Display texto={dados.soma} />
      </Flex>
    </Pagina>
  );
}
