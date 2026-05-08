import { useState } from "react";
import { EquipamentoForm } from "../components/EquipamentoForm";
import type { NovoItemOrcamento, Orcamento } from "../types/orcamento";
import { formatarMoeda } from "../utils/calculosOrcamento";

interface VentilacaoEquipamentosPageProps {
  orcamento: Orcamento;
  onAdicionarEquipamento: (
    tipoId: string,
    item: NovoItemOrcamento
  ) => void;
}

export function VentilacaoEquipamentosPage({
  orcamento,
  onAdicionarEquipamento,
}: VentilacaoEquipamentosPageProps) {
  const [formAberto, setFormAberto] = useState(false);

  const ventilacao = orcamento.macrogrupos.find(
    (macrogrupo) => macrogrupo.tipo === "VENTILACAO"
  );

  const equipamentos = ventilacao?.secoes.find(
    (secao) => secao.tipo === "EQUIPAMENTOS"
  );

  const tagsExistentes =
  orcamento.macrogrupos.flatMap((macrogrupo) =>
    macrogrupo.secoes.flatMap((secao) =>
      secao.tipos.flatMap((tipo) =>
        tipo.itens.map((item) => item.tag.toUpperCase())
      )
    )
  );

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Ventilação / Equipamentos
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Cadastre exaustores, ventiladores e demais equipamentos de
            ventilação.
          </p>
        </div>

        <button
          onClick={() => setFormAberto(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Adicionar equipamento
        </button>
      </div>

      {formAberto && (
        <EquipamentoForm
          tagsExistentes={tagsExistentes}
          onFechar={() => setFormAberto(false)}
          onSalvar={onAdicionarEquipamento}
        />
      )}

      <div className="mt-6 space-y-5">
        {equipamentos?.tipos.map((tipo) => (
          <div key={tipo.id} className="overflow-x-auto rounded-lg border border-slate-200">
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
              <h4 className="text-sm font-bold text-slate-700">
                {tipo.nome}
              </h4>
            </div>
            <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full table-fixed border-collapse text-left text-sm">
              <thead className="bg-white text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Tag</th>
                  <th className="px-4 py-3 font-medium">Descrição</th>
                  <th className="px-4 py-3 font-medium">Fabricante</th>
                  <th className="px-4 py-3 font-medium">Modelo</th>
                  <th className="px-4 py-3 font-medium">Qtd</th>
                  <th className="px-4 py-3 font-medium">Un.</th>
                  <th className="px-4 py-3 font-medium">Preço Equip.</th>
                  <th className="px-4 py-3 font-medium">M.O.</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {tipo.itens.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {item.tag}
                    </td>

                    <td className="px-4 py-3 text-slate-700">
                      {item.descricao}
                    </td>

                    <td className="px-4 py-3 text-slate-700">
                      {item.fabricante}
                      {item.usarSimilarEquivalente &&
                        " ou similar equivalente"}
                    </td>

                    <td className="px-4 py-3 text-slate-700">
                      {item.modelo || "-"}
                    </td>

                    <td className="px-4 py-3 text-slate-700">
                      {item.quantidade}
                    </td>

                    <td className="px-4 py-3 text-slate-700">
                      {item.unidade}
                    </td>

                    <td className="px-4 py-3 text-slate-700">
                      {formatarMoeda(item.valorMaterialUnitario)}
                    </td>

                    <td className="px-4 py-3 text-slate-700">
                      {formatarMoeda(item.valorMaoObraUnitario)}
                    </td>
                  </tr>
                ))}

                {tipo.itens.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-4 py-5 text-center text-sm text-slate-400"
                    >
                      Nenhum equipamento cadastrado neste tipo.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}