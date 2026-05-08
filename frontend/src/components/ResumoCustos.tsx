import type { FormacaoPreco, Orcamento } from "../types/orcamento";
import {
  calcularResumoOrcamento,
  formatarMoeda,
} from "../utils/calculosOrcamento";

interface ResumoCustosProps {
  orcamento: Orcamento;
  onAtualizarFormacaoPreco: (formacaoPreco: FormacaoPreco) => void;
}

export function ResumoCustos({
  orcamento,
  onAtualizarFormacaoPreco,
}: ResumoCustosProps) {
  const resumo = calcularResumoOrcamento(orcamento);

  function atualizarCampo(campo: keyof FormacaoPreco, valor: string) {
    onAtualizarFormacaoPreco({
      ...orcamento.formacaoPreco,
      [campo]: Number(valor),
    });
  }

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-center text-sm font-bold text-slate-900">
        Resumo de Custos
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[320px_1fr]">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="mb-4 text-center text-sm font-bold underline">
            BDI / Formação de Preço
          </h4>

          <div className="space-y-3">
            <CampoBDI
              label="Material"
              value={orcamento.formacaoPreco.bdiMaterial}
              onChange={(valor) => atualizarCampo("bdiMaterial", valor)}
            />

            <CampoBDI
              label="Equipamento"
              value={orcamento.formacaoPreco.bdiEquipamento}
              onChange={(valor) => atualizarCampo("bdiEquipamento", valor)}
            />

            <CampoBDI
              label="Mão de Obra"
              value={orcamento.formacaoPreco.bdiMaoObra}
              onChange={(valor) => atualizarCampo("bdiMaoObra", valor)}
            />

            <CampoBDI
              label="Indiretos"
              value={orcamento.formacaoPreco.bdiIndiretos}
              onChange={(valor) => atualizarCampo("bdiIndiretos", valor)}
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="mb-4 text-center text-sm font-bold underline">
            Totais do Orçamento
          </h4>

          <div className="space-y-3">
            <LinhaTotal titulo="Total Material" valor={resumo.totalMaterial} />
            <LinhaTotal titulo="Total M.O." valor={resumo.totalMaoObra} />
            <LinhaTotal titulo="Total Indiretos" valor={resumo.totalIndiretos} />

            <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-3 py-3">
              <span className="text-sm font-bold text-green-800">
                Total Geral
              </span>

              <strong className="text-base font-bold text-green-900">
                {formatarMoeda(resumo.totalGeral)}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CampoBDIProps {
  label: string;
  value: number;
  onChange: (valor: string) => void;
}

function CampoBDI({ label, value, onChange }: CampoBDIProps) {
  return (
    <label className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium text-slate-700">{label}</span>

      <div className="flex w-32 items-center rounded-lg border border-slate-200 bg-white px-2">
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full border-0 bg-transparent py-2 text-sm outline-none"
        />

        <span className="text-sm text-slate-500">%</span>
      </div>
    </label>
  );
}

interface LinhaTotalProps {
  titulo: string;
  valor: number;
}

function LinhaTotal({ titulo, valor }: LinhaTotalProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-3">
      <span className="text-sm font-medium text-slate-600">{titulo}</span>

      <strong className="text-base font-semibold text-slate-900">
        {formatarMoeda(valor)}
      </strong>
    </div>
  );
}