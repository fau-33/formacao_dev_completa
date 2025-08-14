export default function Page() {
  const nome = "Joaquim";
  const idade = 30;
  return (
    <h1>
      <div>
        {nome} {idade}
      </div>
      <div>{10 + 10}</div>
      <div>{idade * 6}</div>
      <div>{Math.random()}</div>
    </h1>
  );
}
