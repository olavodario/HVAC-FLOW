export type RevisaoOrcamento = `R${string}`;

export type Macrogrupo = "VENTILACAO" | "CLIMATIZACAO" | "INDIRETOS";

export type SecaoOrcamento = "EQUIPAMENTOS" | "MATERIAIS" | "INDIRETOS";

export type TipoFaturamento = "direto" | "fornecimento_3d";

export type Unidade =
  | "un"
  | "pc"
  | "m"
  | "m2"
  | "m3"
  | "kg"
  | "cj"
  | "vb";

export interface FormacaoPreco {
  bdiMaterial: number;
  bdiEquipamento: number;
  bdiMaoObra: number;
  bdiIndiretos: number;
}

export interface Orcamento {
  id: string;

  numeroDiretorPlus: string;
  cliente: string;
  obra: string;
  cidade: string;
  estado: string;

  nomeOrcamento: string;
  orcamentista: string;
  revisaoAtual: RevisaoOrcamento;

  formacaoPreco: FormacaoPreco;

  macrogrupos: MacrogrupoOrcamento[];
}

export interface MacrogrupoOrcamento {
  id: string;
  tipo: Macrogrupo;
  nome: string;
  secoes: SecaoOrcamentoItem[];
}

export interface SecaoOrcamentoItem {
  id: string;
  tipo: SecaoOrcamento;
  nome: string;
  tipos: TipoItemOrcamento[];
}

export interface TipoItemOrcamento {
  id: string;
  nome: string;
  itens: ItemOrcamento[];
  itensIndiretos?: ItemIndireto[];
}

export interface ItemOrcamento {
  id: string;

  tag: string;
  descricao: string;
  fabricante: string;
  modelo: string;
  usarSimilarEquivalente: boolean;

  quantidade: number;
  unidade: Unidade;

  tipoFaturamento: TipoFaturamento;

  valorMaterialUnitario: number;
  valorMaoObraUnitario: number;
  tensao?: string;
  grauFiltragem?: string;
  modeloReferencia?: string;
  acessorios?: string;
}

export interface ItemIndireto {
  id: string;

  descricao: string;
  quantidade: number;
  unidade: "vb";

  valorIndiretoUnitario: number;
}

export interface NovoItemOrcamento {
  tag: string;
  descricao: string;
  fabricante: string;
  modelo: string;
  usarSimilarEquivalente: boolean;

  quantidade: number;
  unidade: Unidade;

  tipoFaturamento: TipoFaturamento;

  valorMaterialUnitario: number;
  valorMaoObraUnitario: number;
  tensao?: string;
  grauFiltragem?: string;
  modeloReferencia?: string;
  acessorios?: string;
}