import type {
  FormacaoPreco,
  ItemOrcamento,
  Orcamento,
} from "../types/orcamento";

export function calcularTotalMaterial(
  item: ItemOrcamento,
  formacaoPreco: FormacaoPreco
): number {
  const custoBase = item.quantidade * item.valorMaterialUnitario;

  const bdi =
    item.tipoFaturamento === "direto"
      ? formacaoPreco.bdiEquipamento
      : formacaoPreco.bdiMaterial;

  return custoBase * (1 + bdi / 100);
}

export function calcularTotalMaoObra(
  item: ItemOrcamento,
  formacaoPreco: FormacaoPreco
): number {
  const custoBase = item.quantidade * item.valorMaoObraUnitario;
  return custoBase * (1 + formacaoPreco.bdiMaoObra / 100);
}

export function calcularTotalIndiretos(
  item: ItemOrcamento,
  formacaoPreco: FormacaoPreco
): number {
  const custoBase = item.quantidade * item.valorIndiretoUnitario;
  return custoBase * (1 + formacaoPreco.bdiIndiretos / 100);
}

export function calcularTotalItem(
  item: ItemOrcamento,
  formacaoPreco: FormacaoPreco
): number {
  return (
    calcularTotalMaterial(item, formacaoPreco) +
    calcularTotalMaoObra(item, formacaoPreco) +
    calcularTotalIndiretos(item, formacaoPreco)
  );
}

export function calcularResumoOrcamento(orcamento: Orcamento) {
  let totalMaterial = 0;
  let totalMaoObra = 0;
  let totalIndiretos = 0;

  orcamento.macrogrupos.forEach((macrogrupo) => {
    macrogrupo.secoes.forEach((secao) => {
      secao.tipos.forEach((tipo) => {
        tipo.itens.forEach((item) => {
          totalMaterial += calcularTotalMaterial(item, orcamento.formacaoPreco);
          totalMaoObra += calcularTotalMaoObra(item, orcamento.formacaoPreco);
          totalIndiretos += calcularTotalIndiretos(
            item,
            orcamento.formacaoPreco
          );
        });
      });
    });
  });

  return {
    totalMaterial,
    totalMaoObra,
    totalIndiretos,
    totalGeral: totalMaterial + totalMaoObra + totalIndiretos,
  };
}

export function formatarMoeda(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}