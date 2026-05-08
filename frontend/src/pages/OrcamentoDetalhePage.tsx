import type { Orcamento } from "../types/orcamento";
import { ResumoCustos } from "../components/ResumoCustos";

interface OrcamentoDetalhePageProps {
  orcamento: Orcamento;
  onVoltar: () => void;
}

export function OrcamentoDetalhePage({
  orcamento,
  onVoltar,
}: OrcamentoDetalhePageProps) {
  return (
    <>
      <button
        onClick={onVoltar}
        className="mb-4 text-sm font-medium text-slate-500 hover:text-slate-900"
      >
        ← Voltar para orçamentos
      </button>

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {orcamento.nomeOrcamento}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {orcamento.cliente} • {orcamento.obra} • Revisão{" "}
            {orcamento.revisaoAtual}
          </p>
        </div>

        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Criar nova revisão
        </button>
      </div>

      <ResumoCustos orcamento={orcamento} />
    </>
  );
}