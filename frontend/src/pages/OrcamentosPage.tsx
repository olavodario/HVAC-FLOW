import type { Orcamento } from "../types/orcamento";
import { OrcamentoTable } from "../components/OrcamentoTable";

interface OrcamentosPageProps {
  orcamentos: Orcamento[];
  onSelecionarOrcamento: (orcamento: Orcamento) => void;
}

export function OrcamentosPage({
  orcamentos,
  onSelecionarOrcamento,
}: OrcamentosPageProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Orçamentos</h2>

          <p className="mt-1 text-sm text-slate-500">
            Selecione um orçamento para visualizar custos, categorias e revisões.
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Novo orçamento
        </button>
      </div>

      <OrcamentoTable
        orcamentos={orcamentos}
        onSelecionarOrcamento={onSelecionarOrcamento}
      />
    </>
  );
}