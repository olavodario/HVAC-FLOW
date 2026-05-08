import type {
  SecaoOrcamentoPagina,
  SecaoSistema,
} from "../types/navegacao";

interface SidebarProps {
  orcamentoAberto: boolean;

  secaoSistemaAtiva?: SecaoSistema;

  secaoOrcamentoAtiva?: SecaoOrcamentoPagina;

  onSelecionarSecaoSistema?: (
    secao: SecaoSistema
  ) => void;

  onSelecionarSecaoOrcamento?: (
    secao: SecaoOrcamentoPagina
  ) => void;
}

export function Sidebar({
  orcamentoAberto,
  secaoSistemaAtiva,
  secaoOrcamentoAtiva,
  onSelecionarSecaoSistema,
  onSelecionarSecaoOrcamento,
}: SidebarProps) {
  return (
    <aside className="w-64 min-h-screen border-r border-slate-200 bg-white px-4 py-5">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-slate-900">
          HVAC-FLOW
        </h1>

        <p className="text-sm text-slate-500">
          Engenharia de Orçamentos HVAC
        </p>
      </div>

      {!orcamentoAberto ? (
        <nav className="space-y-1">
          <SidebarItem
            ativo={secaoSistemaAtiva === "orcamentos"}
            onClick={() =>
              onSelecionarSecaoSistema?.("orcamentos")
            }
          >
            Orçamentos
          </SidebarItem>

          <SidebarItem
            ativo={secaoSistemaAtiva === "categorias"}
            onClick={() =>
              onSelecionarSecaoSistema?.("categorias")
            }
          >
            Categorias
          </SidebarItem>

          <SidebarItem
            ativo={secaoSistemaAtiva === "configuracoes"}
            onClick={() =>
              onSelecionarSecaoSistema?.("configuracoes")
            }
          >
            Configurações
          </SidebarItem>
        </nav>
      ) : (
        <nav className="space-y-5">
          <div>
            <SidebarSectionTitle>
              Geral
            </SidebarSectionTitle>

            <SidebarItem
              ativo={secaoOrcamentoAtiva === "resumo"}
              onClick={() =>
                onSelecionarSecaoOrcamento?.("resumo")
              }
            >
              Resumo
            </SidebarItem>
          </div>

          <div>
            <SidebarSectionTitle>
              Ventilação
            </SidebarSectionTitle>

            <SidebarItem
              ativo={
                secaoOrcamentoAtiva ===
                "ventilacao-equipamentos"
              }
              onClick={() =>
                onSelecionarSecaoOrcamento?.(
                  "ventilacao-equipamentos"
                )
              }
            >
              Equipamentos
            </SidebarItem>

            <SidebarItem
              ativo={
                secaoOrcamentoAtiva ===
                "ventilacao-materiais"
              }
              onClick={() =>
                onSelecionarSecaoOrcamento?.(
                  "ventilacao-materiais"
                )
              }
            >
              Materiais
            </SidebarItem>
          </div>

          <div>
            <SidebarSectionTitle>
              Climatização
            </SidebarSectionTitle>

            <SidebarItem
              ativo={
                secaoOrcamentoAtiva ===
                "climatizacao-equipamentos"
              }
              onClick={() =>
                onSelecionarSecaoOrcamento?.(
                  "climatizacao-equipamentos"
                )
              }
            >
              Equipamentos
            </SidebarItem>

            <SidebarItem
              ativo={
                secaoOrcamentoAtiva ===
                "climatizacao-materiais"
              }
              onClick={() =>
                onSelecionarSecaoOrcamento?.(
                  "climatizacao-materiais"
                )
              }
            >
              Materiais
            </SidebarItem>
          </div>

          <div>
            <SidebarSectionTitle>
              Indiretos
            </SidebarSectionTitle>

            <SidebarItem
              ativo={
                secaoOrcamentoAtiva ===
                "indiretos"
              }
              onClick={() =>
                onSelecionarSecaoOrcamento?.(
                  "indiretos"
                )
              }
            >
              Indiretos
            </SidebarItem>
          </div>
        </nav>
      )}
    </aside>
  );
}

interface SidebarItemProps {
  children: React.ReactNode;

  ativo?: boolean;

  onClick?: () => void;
}

function SidebarItem({
  children,
  ativo,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
        ativo
          ? "bg-slate-100 text-slate-900"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {children}
    </button>
  );
}

interface SidebarSectionTitleProps {
  children: React.ReactNode;
}

function SidebarSectionTitle({
  children,
}: SidebarSectionTitleProps) {
  return (
    <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wide text-slate-400">
      {children}
    </p>
  );
}