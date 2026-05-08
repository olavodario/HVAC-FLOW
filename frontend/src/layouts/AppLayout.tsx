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
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        orcamentoAberto={orcamentoAberto}
        secaoSistemaAtiva={secaoSistemaAtiva}
        secaoOrcamentoAtiva={secaoOrcamentoAtiva}
        onSelecionarSecaoSistema={onSelecionarSecaoSistema}
        onSelecionarSecaoOrcamento={onSelecionarSecaoOrcamento}
      />

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}