export type RevisaoOrcamento = `R${string}`;

export type Macrogrupo = "VENTILACAO" | "CLIMATIZACAO" | "INDIRETOS";

export type TipoMaterial = "material" | "equipamento";

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
  categorias: CategoriaOrcamento[];
}

export interface CategoriaOrcamento {
  id: string;
  nome: string;
  itens: ItemOrcamento[];
}

export interface ItemOrcamento {
  id: string;

  tag: string;
  descricao: string;
  fabricante: string;

  quantidade: number;
  unidade: Unidade;

  tipoMaterial: TipoMaterial;

  valorMaterialUnitario: number;
  valorMaoObraUnitario: number;
  valorIndiretoUnitario: number;
}