import InputFormatado from "@/components/template/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";

export default function () {
  function validarSenha(senha: any) {
    let correspondencia = senha.match(/[\d\s]{8,}/);
    return correspondencia?.[0].length === senha.length;
  }

  const [senha, setSenha, senhaEhValida] = useStateValidado("", validarSenha);
  let borda;
  if (senha === "") {
    borda = "border-none";
  } else if (senhaEhValida) {
    borda = "border-green-600";
  } else if (!senhaEhValida) {
    borda = "border-red-600";
  }

  return (
    <Pagina
      titulo="Validando senha"
      subtitulo="Usando o hook personalizado para validação"
    >
      <InputFormatado
        valor={senha}
        onInput={(e) => setSenha(e.target.value)}
        label="senha"
        tipo="text"
        className={`${borda}  border-4 w-16 flex`}
      />
    </Pagina>
  );
}
