import type { FormacaoPreco } from "../types/orcamento";
import type { SecaoOrcamentoPagina } from "../types/navegacao";
import { ResumoCustos } from "../components/ResumoCustos";
import { ItensPorCategoria } from "../components/ItensPorCategoria";
import { VentilacaoEquipamentosPage } from "./VentilacaoEquipamentosPage";
import type { NovoItemOrcamento, Orcamento } from "../types/orcamento";

interface OrcamentoDetalhePageProps {
  orcamento: Orcamento;
  secaoAtiva: SecaoOrcamentoPagina;
  onVoltar: () => void;
  onAtualizarFormacaoPreco: (formacaoPreco: FormacaoPreco) => void;
  onAdicionarEquipamento: (
    tipoId: string,
    item: NovoItemOrcamento
  ) => void;
    onEditarEquipamento: (
    tipoId: string,
    itemId: string,
    item: NovoItemOrcamento
  ) => void;

  onExcluirEquipamento: (
    tipoId: string,
    itemId: string
  ) => void;
}

export function OrcamentoDetalhePage({
  orcamento,
  secaoAtiva,
  onVoltar,
  onAtualizarFormacaoPreco,
  onAdicionarEquipamento,
  onEditarEquipamento,
  onExcluirEquipamento,
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

      {secaoAtiva === "resumo" && (
        <>
          <ResumoCustos
            orcamento={orcamento}
            onAtualizarFormacaoPreco={onAtualizarFormacaoPreco}
          />

          <ItensPorCategoria orcamento={orcamento} />
        </>
      )}

      {secaoAtiva === "ventilacao-equipamentos" && (
        <VentilacaoEquipamentosPage
          orcamento={orcamento}
          onAdicionarEquipamento={onAdicionarEquipamento}
          onEditarEquipamento={onEditarEquipamento}
          onExcluirEquipamento={onExcluirEquipamento}
        />
      )}
      {secaoAtiva === "ventilacao-materiais" && (
        <PaginaSecao
          titulo="Ventilação / Materiais"
          descricao="Cadastro e visualização dos materiais de ventilação do orçamento."
        />
      )}

      {secaoAtiva === "climatizacao-equipamentos" && (
        <PaginaSecao
          titulo="Climatização / Equipamentos"
          descricao="Cadastro e visualização dos equipamentos de climatização do orçamento."
        />
      )}

      {secaoAtiva === "climatizacao-materiais" && (
        <PaginaSecao
          titulo="Climatização / Materiais"
          descricao="Cadastro e visualização dos materiais de climatização do orçamento."
        />
      )}

      {secaoAtiva === "indiretos" && (
        <PaginaSecao
          titulo="Indiretos"
          descricao="Cadastro e visualização dos custos indiretos do orçamento."
        />
      )}
    </>
  );
}

interface PaginaSecaoProps {
  titulo: string;
  descricao: string;
}

function PaginaSecao({ titulo, descricao }: PaginaSecaoProps) {
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-bold text-slate-900">{titulo}</h3>

      <p className="mt-1 text-sm text-slate-500">{descricao}</p>

      <div className="mt-6 rounded-lg border border-dashed border-slate-300 p-8 text-center text-sm text-slate-400">
        Módulo em construção.
      </div>
    </section>
  );
}