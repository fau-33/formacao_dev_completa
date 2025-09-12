interface gridProps {
  cols?: number;
  semEspaco?: boolean;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xl2?: number;
  children: React.ReactNode;
  className?: string;
}

export default function Grid(props: gridProps) {
  return (
    <div
      className={`grid grid-cols-${props.cols ?? 1} 
        ${props.semEspaco ? "" : "gap-3"}  
        ${props.sm ? `sm:grid-cols-${props.sm ?? ""}` : ""}
        ${props.md ? `md:grid-cols-${props.md ?? ""}` : ""}
        ${props.lg ? `lg:grid-cols-${props.lg ?? ""}` : ""}
        ${props.xl ? `xl:grid-cols-${props.xl ?? ""}` : ""}
        ${props.xl2 ? `2xl:grid-cols-${props.xl2 ?? ""}` : ""}
        ${props.className ?? ""}
      `}
    >
      {props.children}
    </div>
  );
}
