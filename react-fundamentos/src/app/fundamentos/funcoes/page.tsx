export default function Page() {
  function renderizarTitulo() {
    return (
      <div>
        <h1>Título</h1>
        <h2>Subtítulo</h2>
      </div>
    );
  }

  function renderizarConteudo() {
    return (
      <div>
        <p>Ana</p>
        <p>João</p>
        <p>Carlos</p>
      </div>
    );
  }
  return (
    <div>
      {renderizarTitulo()}
      <hr />
      {renderizarConteudo()}
    </div>
  );
}
