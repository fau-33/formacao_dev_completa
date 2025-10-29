import {
  IconAppWindow,
  IconArrowsLeftRight,
  IconDimensions,
  IconLetterCase,
  IconMathGreater,
  IconNumbers,
  IconRefreshAlert,
  IconSection,
  IconUsers,
  IconLock,
  IconShoppingCart,
} from "@tabler/icons-react";

export const secoes = [
  {
    titulo: "Essenciais",
    aberta: false,
    itens: [
      {
        titulo: "Contador",
        url: "/essenciais/contador",
        tag: "useState",
        icone: <IconNumbers />,
      },
      {
        titulo: "Votação",
        url: "/essenciais/votacao",
        tag: "useState",
        icone: <IconUsers />,
      },
      {
        titulo: "Consulta API",
        url: "/essenciais/consultaAPI",
        tag: "useEffect",
        icone: <IconArrowsLeftRight />,
      },
      {
        titulo: "Maior",
        url: "/essenciais/maior",
        tag: "useEffect",
        icone: <IconMathGreater />,
      },
      {
        titulo: "Contagem de Caracteres",
        url: "/essenciais/contagemCaracteresEffect",
        tag: "useEffect",
        icone: <IconLetterCase />,
      },
      {
        titulo: "State vs Referência",
        url: "/essenciais/stateVsRef",
        tag: "useRef",
        icone: <IconRefreshAlert />,
      },
      {
        titulo: "Referência ao Elemento",
        url: "/essenciais/refElemento",
        tag: "useRef",
        icone: <IconSection />,
      },
      {
        titulo: "Contagem de caracteres ref",
        url: "/essenciais/contagemCaracteresRef",
        tag: "useRef",
        icone: <IconLetterCase />,
      },
    ],
  },
  {
    titulo: "Personalizados",
    aberta: true,
    itens: [
      {
        titulo: "Modal",
        url: "/personalizados/modal",
        tag: "personalizados",
        icone: <IconAppWindow />,
      },
      {
        titulo: "Tamanho da Janela",
        url: "/personalizados/tamanhoJanela",
        tag: "personalizados",
        icone: <IconDimensions />,
      },
      {
        titulo: "Validando senha",
        url: "/personalizados/senha",
        tag: "personalizados",
        icone: <IconLock />,
      },
    ],
  },
  {
    titulo: "Contexto",
    aberta: true,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />,
      },
    ],
  },
];

export default secoes;
