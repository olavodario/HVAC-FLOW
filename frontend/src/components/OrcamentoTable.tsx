import type { Orcamento } from "../types/orcamento";


interface OrcamentoTableProps {
  orcamentos: Orcamento[];
  onSelecionarOrcamento: (orcamento: Orcamento) => void;
}

export function OrcamentoTable({
  orcamentos,
  onSelecionarOrcamento,
}: OrcamentoTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-[1100px] w-full table-fixed border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            <th className="px-4 py-3 font-medium">Nº Diretor Plus</th>
            <th className="px-4 py-3 font-medium">Nome do orçamento</th>
            <th className="px-4 py-3 font-medium">Cliente</th>
            <th className="px-4 py-3 font-medium">Obra</th>
            <th className="px-4 py-3 font-medium">Revisão</th>
            <th className="px-4 py-3 font-medium">Orçamentista</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {orcamentos.map((orcamento) => (
            <tr
              key={orcamento.id}
              onClick={() => onSelecionarOrcamento(orcamento)}
              className="cursor-pointer hover:bg-slate-50"
            >
              <td className="px-4 py-4 font-medium text-slate-900">
                {orcamento.numeroDiretorPlus}
              </td>

              <td className="px-4 py-4 text-slate-700">
                {orcamento.nomeOrcamento}
              </td>

              <td className="px-4 py-4 text-slate-700">
                {orcamento.cliente}
              </td>

              <td className="px-4 py-4 text-slate-700">{orcamento.obra}</td>

              <td className="px-4 py-4">
                <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                  {orcamento.revisaoAtual}
                </span>
              </td>

              <td className="px-4 py-4 text-slate-700">
                {orcamento.orcamentista}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}