import { useState } from "react";

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

  onSelecionarSecaoSistema?: (
    secao: SecaoSistema
  ) => void;

  onSelecionarSecaoOrcamento?: (
    secao: SecaoOrcamentoPagina
  ) => void;
}

export function AppLayout({
  children,
  orcamentoAberto,
  secaoSistemaAtiva,
  secaoOrcamentoAtiva,
  onSelecionarSecaoSistema,
  onSelecionarSecaoOrcamento,
}: AppLayoutProps) {
  const [sidebarAberta, setSidebarAberta] =
    useState(true);

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <div className={sidebarAberta ? "relative w-full lg:w-64" : "relative w-10"}>
        {sidebarAberta && (
          <Sidebar
            orcamentoAberto={
              orcamentoAberto
            }
            secaoSistemaAtiva={
              secaoSistemaAtiva
            }
            secaoOrcamentoAtiva={
              secaoOrcamentoAtiva
            }
            onSelecionarSecaoSistema={
              onSelecionarSecaoSistema
            }
            onSelecionarSecaoOrcamento={
              onSelecionarSecaoOrcamento
            }
          />
        )}

        <button
          onClick={() => setSidebarAberta((aberta) => !aberta)}
          aria-label={sidebarAberta ? "Recolher menu" : "Expandir menu"}
          className={`
            absolute top-5 z-50 flex h-7 w-7 items-center justify-center
            rounded-md bg-blue-600 text-white shadow-sm
            transition-all hover:bg-blue-700
            ${sidebarAberta ? "right-3" : "left-3"}
          `}
        >
          <span className="text-lg leading-none">
            {sidebarAberta ? "‹" : "›"}
          </span>
        </button>
      </div>

      <main className="min-w-0 flex-1 p-4 sm:p-6">
        {children}
      </main>
    </div>
  );
}