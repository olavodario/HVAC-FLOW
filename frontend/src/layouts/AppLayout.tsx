import { Sidebar } from "../components/Sidebar";
import type {
  SecaoOrcamentoPagina,
  SecaoSistema,
} from "../types/navegacao";

interface AppLayoutProps {
  children: React.ReactNode;
  orcamentoAberto: boolean;
  secaoSistemaAtiva?: SecaoSistema;
  secaoOrcamentoAtiva?: SecaoOrcamentoPagina;
  onSelecionarSecaoSistema?: (secao: SecaoSistema) => void;
  onSelecionarSecaoOrcamento?: (secao: SecaoOrcamentoPagina) => void;
}

export function AppLayout({
  children,
  orcamentoAberto,
  secaoSistemaAtiva,
  secaoOrcamentoAtiva,
  onSelecionarSecaoSistema,
  onSelecionarSecaoOrcamento,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <Sidebar
        orcamentoAberto={orcamentoAberto}
        secaoSistemaAtiva={secaoSistemaAtiva}
        secaoOrcamentoAtiva={secaoOrcamentoAtiva}
        onSelecionarSecaoSistema={onSelecionarSecaoSistema}
        onSelecionarSecaoOrcamento={onSelecionarSecaoOrcamento}
      />

      <main className="min-w-0 flex-1 p-4 sm:p-6">
        {children}
      </main>
    </div>
  );
}