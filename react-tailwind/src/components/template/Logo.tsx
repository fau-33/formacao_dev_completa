import { IconBrandTailwind } from "@tabler/icons-react";

interface LogoProps {
  className?: string;
}
export default function Logo(props: LogoProps) {
  return (
    <div className={`flex gap-2 items-center  ${props.className ?? ""}`}>
      <IconBrandTailwind size={32} stroke={1} />
      <span className="text-zinc-400">Tailwind com React</span>
    </div>
  );
}
