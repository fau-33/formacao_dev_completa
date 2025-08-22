import Titulo from "@/components/template/Titulo";

export default function PaginaTitulo() {
  return (
    <div className="p-10">
      <Titulo
        principal="Dashboard"
        secundario="Informações sobre sua conta"
        gradiente
      />
    </div>
  );
}
