import { useState } from "react";
import { AppLayout } from "./layouts/AppLayout";
import { mockOrcamentos } from "./data/mockOrcamento";
import { OrcamentosPage } from "./pages/OrcamentosPage";
import { OrcamentoDetalhePage } from "./pages/OrcamentoDetalhePage";
import type { Orcamento } from "./types/orcamento";

function App() {
  const [orcamentoSelecionado, setOrcamentoSelecionado] =
    useState<Orcamento | null>(null);

  return (
    <AppLayout>
      {orcamentoSelecionado ? (
        <OrcamentoDetalhePage
          orcamento={orcamentoSelecionado}
          onVoltar={() => setOrcamentoSelecionado(null)}
        />
      ) : (
        <OrcamentosPage
          orcamentos={mockOrcamentos}
          onSelecionarOrcamento={setOrcamentoSelecionado}
        />
      )}
    </AppLayout>
  );
}

export default App;