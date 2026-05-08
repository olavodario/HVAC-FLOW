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
        id: "mg-1",
        tipo: "CLIMATIZACAO",
        nome: "Climatização",
        categorias: [
          {
            id: "cat-1",
            nome: "Equipamentos",
            itens: [
              {
                id: "item-1",
                tag: "FC-01",
                descricao: "FANCOIL 10TR",
                fabricante: "Daikin",
                quantidade: 2,
                unidade: "un",
                tipoMaterial: "equipamento",
                valorMaterialUnitario: 15000,
                valorMaoObraUnitario: 1500,
                valorIndiretoUnitario: 300,
              },
            ],
          },
          {
            id: "cat-2",
            nome: "Difusão de Ar",
            itens: [
              {
                id: "item-2",
                tag: "DI-01",
                descricao: 'DIFUSOR DE INSUFLAMENTO DUPLA DEFLEXÃO 12"x12" DIFUSOR DE INSUFLAMENTO DUPLA DEFLEXÃO 12"x12"DIFUSOR DE INSUFLAMENTO DUPLA DEFLEXÃO 12"x12" DIFUSOR DE INSUFLAMENTO DUPLA DEFLEXÃO 12"x12" DIFUSOR DE INSUFLAMENTO DUPLA DEFLEXÃO 12"x12"',
                fabricante: "TROX ou similar",
                quantidade: 15,
                unidade: "pc",
                tipoMaterial: "material",
                valorMaterialUnitario: 250,
                valorMaoObraUnitario: 15,
                valorIndiretoUnitario: 5,
              },
              {
                id: "item-3",
                tag: "GE-35",
                descricao: "GRELHA DE EXAUSTÃO 500x500mm",
                fabricante: "TROX ou similar",
                quantidade: 15,
                unidade: "pc",
                tipoMaterial: "material",
                valorMaterialUnitario: 850,
                valorMaoObraUnitario: 350,
                valorIndiretoUnitario: 30,
              },
            ],
          },
        ],
      },

      {
        id: "mg-2",
        tipo: "VENTILACAO",
        nome: "Ventilação",
        categorias: [
          {
            id: "cat-3",
            nome: "Dutos",
            itens: [
              {
                id: "item-4",
                tag: "DUT-01",
                descricao: "DUTO EM CHAPA GALVANIZADA",
                fabricante: "Fabricação 3D",
                quantidade: 120,
                unidade: "m2",
                tipoMaterial: "material",
                valorMaterialUnitario: 180,
                valorMaoObraUnitario: 90,
                valorIndiretoUnitario: 20,
              },
            ],
          },
        ],
      },

      {
        id: "mg-3",
        tipo: "INDIRETOS",
        nome: "Indiretos",
        categorias: [
          {
            id: "cat-4",
            nome: "Custos Indiretos",
            itens: [
              {
                id: "item-5",
                tag: "IND-01",
                descricao: "MOBILIZAÇÃO DE EQUIPE",
                fabricante: "3D Ar Condicionado",
                quantidade: 1,
                unidade: "vb",
                tipoMaterial: "material",
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
];