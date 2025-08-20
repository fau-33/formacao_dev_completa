import Caixa from "@/components/Caixa";

export default function Margin() {
  return (
    <div className="flex flex-center h-screen">
      <Caixa className="mx-3">#1</Caixa>
      <Caixa className="my-5">#2</Caixa>
      <Caixa className="mb-16 ml-6">#3</Caixa>
      <Caixa className="m-8">#4</Caixa>
      <Caixa className="mt-[150px]">#5</Caixa>
    </div>
  );
}
