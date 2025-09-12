import Caixa from "@/components/Caixa";

export default function Boxsizing() {
  return (
    <div className="flex flex-col gap-2">
      <Caixa className="w-36">#1</Caixa>
      {/* box-content */}
      <Caixa className="w-36 h-36 border-8 border-white box-content">#2</Caixa>
    </div>
  );
}
