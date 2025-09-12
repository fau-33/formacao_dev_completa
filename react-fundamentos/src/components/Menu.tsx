import {
  IconArrowDownSquare,
  IconArrowUpSquare,
  IconBraces,
  IconBrandJavascript,
  IconCalculator,
  IconCode,
  IconFileCheck,
  IconForms,
  IconFunction,
  IconH1,
  IconHome,
  IconNumber,
  IconSitemap,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
    flex flex-col justify-start  w-72
      text-3xl p-2 gap-2
    `}
    >
      <span className="text-sm text-zinc-500  pl-3 pt-4">Comunicação</span>
      <MenuItem
        icone={<IconArrowDownSquare />}
        texto="Comunicação Direta"
        url="/comunicacao/direta"
      />
      <MenuItem
        icone={<IconArrowUpSquare />}
        texto="Comunicação Indireta"
        url="/comunicacao/indireta"
      />
      <span className="text-sm text-zinc-500  pl-3 pt-4">Estados</span>
      <MenuItem
        icone={<IconCode />}
        texto="Componente sem estado"
        url="/estado/sem"
      />
      <MenuItem
        icone={<IconCode />}
        texto="Componente com estado"
        url="/estado/com"
      />
      <MenuItem
        icone={<IconNumber />}
        texto="Contador"
        url="/estado/contador"
      />
      <MenuItem
        icone={<IconForms />}
        texto="Campo de Texto"
        url="/estado/campoTexto"
      />
      <MenuItem
        icone={<IconCalculator />}
        texto="Calculadora"
        url="/estado/calculadora"
      />

      <span className="text-sm text-zinc-500  pl-3 pt-4">Fundamentos</span>
      <MenuItem
        icone={<IconBraces />}
        texto="JSX com JS"
        url="/fundamentos/soma"
      />
      <MenuItem
        icone={<IconFunction />}
        texto="JSX: chamando funções"
        url="/fundamentos/funcao"
      />
      <MenuItem
        icone={<IconFileCheck />}
        texto="Página #1"
        url="/fundamentos/pagina"
      />
      <MenuItem icone={<IconSitemap />} texto="Página #2" url="/pagina" />

      <span className="text-sm text-zinc-500  pl-3 pt-4">Componentes</span>
      <MenuItem
        icone={<IconCode />}
        texto="Componente Basico"
        url="/componente/basico"
      />
      <MenuItem
        icone={<IconH1 />}
        texto="Componente Titulo"
        url="/componente/titulo"
      />
      <MenuItem
        icone={<IconBrandJavascript />}
        texto="JS com JSX"
        url="/componente/trecho"
      />
      <MenuItem
        icone={<IconHome />}
        texto="Página #1"
        url="/fundamentos/pagina"
      />
    </div>
  );
}
