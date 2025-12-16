import InputComId from "@/components/formulario/inputComId";
import Pagina from "@/components/template/Pagina";

export default function () {
  return (
    <Pagina
      titulo="Usando o hook useId em um componente"
      subtitulo="Reutilizando em um componente"
    >
      <InputComId label="Nome" />
      <InputComId label="Sobrenome" />
    </Pagina>
  );
}
