import type { Orcamento } from "../types/orcamento";
import { calcularResumoOrcamento, formatarMoeda } from "../utils/calculosOrcamento";

interface ResumoCustosProps {
  orcamento: Orcamento;
}

export function ResumoCustos({ orcamento }: ResumoCustosProps) {
  const resumo = calcularResumoOrcamento(orcamento);

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Total Material</p>
        <strong className="mt-2 block text-xl text-slate-900">
          {formatarMoeda(resumo.totalMaterial)}
        </strong>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Total Mão de Obra</p>
        <strong className="mt-2 block text-xl text-slate-900">
          {formatarMoeda(resumo.totalMaoObra)}
        </strong>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Total Indiretos</p>
        <strong className="mt-2 block text-xl text-slate-900">
          {formatarMoeda(resumo.totalIndiretos)}
        </strong>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm text-blue-700">Total Geral</p>
        <strong className="mt-2 block text-xl text-blue-900">
          {formatarMoeda(resumo.totalGeral)}
        </strong>
      </div>
    </div>
  );
}