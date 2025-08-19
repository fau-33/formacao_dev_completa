interface BotoesProps {
  alterarNome(nome: string): void;
}

export default function Botoes(props: BotoesProps) {
  return (
    <div className="flex gap-5">
      <button
        onClick={() => props.alterarNome("Maria")}
        className="bg-purple-600 px-4 py-2 text-white rounded-md"
      >
        Maria
      </button>
      <button
        onClick={() => props.alterarNome("Joao")}
        className="bg-purple-600 px-4 py-2 text-white rounded-md"
      >
        Joao
      </button>
      <button
        onClick={() => props.alterarNome("Pedro")}
        className="bg-purple-600 px-4 py-2 text-white rounded-md"
      >
        Pedro
      </button>
    </div>
  );
}
