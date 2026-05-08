import type { MacrogrupoOrcamento, Orcamento } from "../types/orcamento";
import {
  calcularTotalIndiretos,
  calcularTotalItem,
  calcularTotalMaoObra,
  calcularTotalMaterial,
  formatarMoeda,
} from "../utils/calculosOrcamento";


interface ItensPorCategoriaProps {
  orcamento: Orcamento;
}

function macrogrupoTemItens(macrogrupo: MacrogrupoOrcamento): boolean {
  return macrogrupo.secoes.some((secao) =>
    secao.tipos.some((tipo) => tipo.itens.length > 0)
  );
}

export function ItensPorCategoria({ orcamento }: ItensPorCategoriaProps) {
  const macrogruposComItens = orcamento.macrogrupos.filter(macrogrupoTemItens);

  return (
    <div className="mt-6 space-y-6">
      {macrogruposComItens.map((macrogrupo) => {
        const secoesComItens = macrogrupo.secoes.filter((secao) =>
          secao.tipos.some((tipo) => tipo.itens.length > 0)
        );

        return (
          <section
            key={macrogrupo.id}
            className="rounded-xl border border-slate-200 bg-white"
          >
            <div className="border-b border-slate-200 px-4 py-3">
              <h3 className="text-base font-bold text-slate-900">
                {macrogrupo.nome}
              </h3>
            </div>

            <div className="space-y-5 p-4">
              {secoesComItens.map((secao) => {
                const tiposComItens = secao.tipos.filter(
                  (tipo) => tipo.itens.length > 0
                );

                return (
                  <div key={secao.id}>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
                      {secao.nome}
                    </h4>

                    <div className="space-y-4">
                      {tiposComItens.map((tipo) => (
                        <div key={tipo.id}>
                          <h5 className="mb-3 text-sm font-semibold text-slate-700">
                            {tipo.nome}
                          </h5>

                          <div className="overflow-hidden rounded-lg border border-slate-200">
                            <table className="w-full table-fixed border-collapse text-left text-sm">
                              <thead className="bg-slate-50 text-slate-500">
                                <tr>
                                  <th className="w-[90px] px-3 py-2 font-medium">
                                    Tag
                                  </th>
                                  <th className="w-[420px] px-3 py-2 font-medium">
                                    Descrição
                                  </th>
                                  <th className="w-[180px] px-3 py-2 font-medium">
                                    Fabricante
                                  </th>
                                  <th className="w-[70px] px-3 py-2 font-medium">
                                    Qtd
                                  </th>
                                  <th className="w-[70px] px-3 py-2 font-medium">
                                    Un.
                                  </th>
                                  <th className="w-[140px] px-3 py-2 font-medium">
                                    Faturamento
                                  </th>
                                  <th className="w-[140px] px-3 py-2 font-medium">
                                    Material
                                  </th>
                                  <th className="w-[140px] px-3 py-2 font-medium">
                                    M.O.
                                  </th>
                                  <th className="w-[140px] px-3 py-2 font-medium">
                                    Indiretos
                                  </th>
                                  <th className="w-[140px] px-3 py-2 font-medium">
                                    Total
                                  </th>
                                </tr>
                              </thead>

                              <tbody className="divide-y divide-slate-100">
                                {tipo.itens.map((item) => (
                                  <tr
                                    key={item.id}
                                    className="hover:bg-slate-50"
                                  >
                                    <td className="px-3 py-3 align-top font-medium text-slate-900">
                                      {item.tag}
                                    </td>

                                    <td className="break-words whitespace-normal px-3 py-3 align-top text-slate-700">
                                      {item.descricao}
                                    </td>

                                    <td className="px-3 py-3 align-top text-slate-700">
                                      {item.fabricante}
                                    </td>

                                    <td className="px-3 py-3 align-top text-slate-700">
                                      {item.quantidade}
                                    </td>

                                    <td className="px-3 py-3 align-top text-slate-700">
                                      {item.unidade}
                                    </td>

                                    <td className="px-3 py-3 align-top text-slate-700">
                                      {item.tipoFaturamento === "direto"
                                        ? "Direto"
                                        : "Fornec. 3D"}
                                    </td>

                                    <td className="px-3 py-3 align-top text-slate-700">
                                      {formatarMoeda(
                                        calcularTotalMaterial(
                                          item,
                                          orcamento.formacaoPreco
                                        )
                                      )}
                                    </td>

                                    <td className="px-3 py-3 align-top text-slate-700">
                                      {formatarMoeda(
                                        calcularTotalMaoObra(
                                          item,
                                          orcamento.formacaoPreco
                                        )
                                      )}
                                    </td>

                                    <td className="px-3 py-3 align-top text-slate-700">
                                      {formatarMoeda(
                                        calcularTotalIndiretos(
                                          item,
                                          orcamento.formacaoPreco
                                        )
                                      )}
                                    </td>

                                    <td className="px-3 py-3 align-top text-right text-slate-700">
                                      {formatarMoeda(
                                        calcularTotalItem(
                                          item,
                                          orcamento.formacaoPreco
                                        )
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}