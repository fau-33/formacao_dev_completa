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
  IconPin,
  IconForms,
  IconTextColor,
  IconColorSwatch,
  IconDatabase,
  IconDatabaseImport,
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
    aberta: false,
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
    aberta: false,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />,
      },
    ],
  },
  {
    titulo: "Outros",
    aberta: true,
    itens: [
      {
        titulo: "Memorizando um elemento",
        url: "/outros/memorizacao",
        tag: "useMemo",
        icone: <IconPin />,
      },
      {
        titulo: "Memorizando uma função",
        url: "/outros/memorizandoFuncoes",
        tag: "useCallback",
        icone: <IconPin />,
      },
      {
        titulo: "Formulário 1",
        url: "/outros/formularioImperativeHandle",
        tag: "useImperativeHandle",
        icone: <IconForms />,
      },
      {
        titulo: "Texto",
        url: "/outros/texto",
        tag: "useLayoutEffect",
        icone: <IconTextColor />,
      },
      {
        titulo: "Gerador de cor",
        url: "/outros/geradorDeCor",
        tag: "useLayoutEffect",
        icone: <IconColorSwatch />,
      },
      {
        titulo: "Soma com useState",
        url: "/outros/somaState",
        tag: "useState",
        icone: <IconDatabase />,
      },
      {
        titulo: "Soma com useReducer",
        url: "/outros/somaReducer",
        tag: "useReducer",
        icone: <IconDatabaseImport />,
      },
      {
        titulo: "Formulario 1",
        url: "/outros/formularioId1",
        tag: "useId",
        icone: <IconForms />,
      },
      {
        titulo: "Formulario 2",
        url: "/outros/formularioId2",
        tag: "useId",
        icone: <IconForms />,
      },
    ],
  },
];

export default secoes;
