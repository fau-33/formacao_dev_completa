import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState, useEffect } from "react";

export default function () {
  // 1- Criar dois estados para criar numeros
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [valido, setValido] = useState(false);

  // 2 - Linkar os estados com os inputs
  const handleInput1 = (e: any) => {
    setNumero1(+e.target.value);
  };

  const handleInput2 = (e: any) => {
    setNumero2(+e.target.value);
  };

  // 3 - Monitorar as validades dos numeros. O numero sera valido se for > 0
  useEffect(() => {
    setValido(numero1 > 0 && numero2 > 0);
  }, [numero1, numero2]);

  // 4 - Fazer a soma clicando no botao se os numeros forem validos. -999
  const handleSomaClick = () => {
    if (valido) {
      setResultado(numero1 + numero2);
    } else {
      setResultado(-999);
    }
  };

  return (
    <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
      <Flex col centerCross>
        <Display texto="Faça uma soma"></Display>
        <Flex center>
          <InputFormatado
            tipo="number"
            valor={numero1}
            onInput={handleInput1}
          ></InputFormatado>
          <span className="text-4xl ml-2">+</span>
          <InputFormatado
            tipo="number"
            valor={numero2}
            onInput={handleInput2}
          ></InputFormatado>
          <Botao
            cor="bg-orange-400"
            texto="="
            onClick={handleSomaClick}
          ></Botao>
        </Flex>
        <Display texto={resultado} />
      </Flex>
    </Pagina>
  );
}
