import type { Orcamento } from "../types/orcamento";

export const mockOrcamentos: Orcamento[] = [
  {
    id: "1",

    numeroDiretorPlus: "186-26",
    cliente: "INCONEW",
    obra: "WTC",
    cidade: "UBERLÂNDIA",
    estado: "MG",

    nomeOrcamento: "186-26-OBR-INCONEW-WTC-UBERLÂNDIA-MG",
    orcamentista: "Olavo Dario",
    revisaoAtual: "R00",

    formacaoPreco: {
      bdiMaterial: 19,
      bdiEquipamento: 0,
      bdiMaoObra: 60,
      bdiIndiretos: 60,
    },

    macrogrupos: [
      {
        id: "mg-ventilacao",
        tipo: "VENTILACAO",
        nome: "Ventilação",
        secoes: [
          {
            id: "sec-vent-equip",
            tipo: "EQUIPAMENTOS",
            nome: "Equipamentos",
            tipos: [
              {
                id: "tipo-exaustor",
                nome: "Exaustores",
                itens: [
                  {
                    id: "item-ex-01",
                    tag: "EX-01",
                    descricao:
                      "EXAUSTOR CENTRÍFUGO EM GABINETE, ROTOR SIROCCO, ACIONAMENTO POR POLIA E CORREIA",
                    fabricante: "Soler & Palau ou similar equivalente",
                    modelo: "",
                    usarSimilarEquivalente: true,
                    quantidade: 1,
                    unidade: "un",
                    tipoFaturamento: "direto",
                    valorMaterialUnitario: 8500,
                    valorMaoObraUnitario: 1200,
                    valorIndiretoUnitario: 250,
                  },
                ],
              },
              {
                id: "tipo-ventilador",
                nome: "Ventiladores",
                itens: [],
              },
            ],
          },
          {
            id: "sec-vent-mat",
            tipo: "MATERIAIS",
            nome: "Materiais",
            tipos: [
              {
                id: "tipo-dutos",
                nome: "Dutos",
                itens: [
                  {
                    id: "item-dut-01",
                    tag: "DUT-01",
                    descricao: "DUTO EM CHAPA GALVANIZADA",
                    fabricante: "Fabricação 3D",
                    quantidade: 120,
                    unidade: "m2",
                    tipoFaturamento: "fornecimento_3d",
                    valorMaterialUnitario: 180,
                    valorMaoObraUnitario: 90,
                    valorIndiretoUnitario: 20,
                    modelo: "",
                    usarSimilarEquivalente: false,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        id: "mg-climatizacao",
        tipo: "CLIMATIZACAO",
        nome: "Climatização",
        secoes: [
          {
            id: "sec-clima-equip",
            tipo: "EQUIPAMENTOS",
            nome: "Equipamentos",
            tipos: [
              {
                id: "tipo-fancoil",
                nome: "Fancoils",
                itens: [
                  {
                    id: "item-fc-01",
                    tag: "FC-01",
                    descricao: "FANCOIL 10TR",
                    fabricante: "Daikin ou similar equivalente",
                    modelo: "",
                    usarSimilarEquivalente: true,
                    quantidade: 2,
                    unidade: "un",
                    tipoFaturamento: "direto",
                    valorMaterialUnitario: 15000,
                    valorMaoObraUnitario: 1500,
                    valorIndiretoUnitario: 300,
                  },
                ],
              },
            ],
          },
          {
            id: "sec-clima-mat",
            tipo: "MATERIAIS",
            nome: "Materiais",
            tipos: [
              {
                id: "tipo-difusao",
                nome: "Difusão de Ar",
                itens: [
                  {
                    id: "item-di-01",
                    tag: "DI-01",
                    descricao:
                      'DIFUSOR DE INSUFLAMENTO DUPLA DEFLEXÃO 12"x12"',
                    fabricante: "TROX ou similar equivalente",
                    modelo: "",
                    usarSimilarEquivalente: true,
                    quantidade: 15,
                    unidade: "pc",
                    tipoFaturamento: "fornecimento_3d",
                    valorMaterialUnitario: 250,
                    valorMaoObraUnitario: 15,
                    valorIndiretoUnitario: 5,
                  },
                  {
                    id: "item-ge-35",
                    tag: "GE-35",
                    descricao: "GRELHA DE EXAUSTÃO 500x500mm",
                    fabricante: "TROX ou similar equivalente",
                    modelo: "",
                    usarSimilarEquivalente: true,
                    quantidade: 15,
                    unidade: "pc",
                    tipoFaturamento: "fornecimento_3d",
                    valorMaterialUnitario: 850,
                    valorMaoObraUnitario: 350,
                    valorIndiretoUnitario: 30,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        id: "mg-indiretos",
        tipo: "INDIRETOS",
        nome: "Indiretos",
        secoes: [
          {
            id: "sec-indiretos",
            tipo: "INDIRETOS",
            nome: "Indiretos",
            tipos: [
              {
                id: "tipo-custos-indiretos",
                nome: "Custos Indiretos",
                itens: [
                  {
                    id: "item-ind-01",
                    tag: "IND-01",
                    descricao: "MOBILIZAÇÃO DE EQUIPE",
                    fabricante: "3D Ar Condicionado",
                    modelo: "",
                    usarSimilarEquivalente: true,
                    quantidade: 1,
                    unidade: "vb",
                    tipoFaturamento: "fornecimento_3d",
                    valorMaterialUnitario: 0,
                    valorMaoObraUnitario: 0,
                    valorIndiretoUnitario: 3500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];