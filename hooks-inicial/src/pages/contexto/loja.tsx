import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function () {
  const [carrinho, setCarrinho] = useState([]);
  return (
    <Pagina
      titulo="Loja"
      subtitulo="Compartilhando informações entre múltiplos componentes com contexto"
    >
      <Flex col gap={4}>
        <Flex gap={4}>
          <AdicionarProduto />
          <FinalizarCompra />
        </Flex>
        <Carrinho />
      </Flex>
    </Pagina>
  );
}
