import { useState } from "react";
import { AppLayout } from "./layouts/AppLayout";
import { mockOrcamentos } from "./data/mockOrcamento";
import { OrcamentosPage } from "./pages/OrcamentosPage";
import { OrcamentoDetalhePage } from "./pages/OrcamentoDetalhePage";
import type { FormacaoPreco, Orcamento } from "./types/orcamento";

function App() {
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>(mockOrcamentos);
  const [orcamentoSelecionadoId, setOrcamentoSelecionadoId] = useState<
    string | null
  >(null);

  const orcamentoSelecionado =
    orcamentos.find((orcamento) => orcamento.id === orcamentoSelecionadoId) ??
    null;

  function atualizarFormacaoPreco(
    orcamentoId: string,
    novaFormacaoPreco: FormacaoPreco
  ) {
    setOrcamentos((orcamentosAtuais) =>
      orcamentosAtuais.map((orcamento) =>
        orcamento.id === orcamentoId
          ? {
              ...orcamento,
              formacaoPreco: novaFormacaoPreco,
            }
          : orcamento
      )
    );
  }

  return (
    <AppLayout>
      {orcamentoSelecionado ? (
        <OrcamentoDetalhePage
          orcamento={orcamentoSelecionado}
          onVoltar={() => setOrcamentoSelecionadoId(null)}
          onAtualizarFormacaoPreco={(novaFormacaoPreco) =>
            atualizarFormacaoPreco(orcamentoSelecionado.id, novaFormacaoPreco)
          }
        />
      ) : (
        <OrcamentosPage
          orcamentos={orcamentos}
          onSelecionarOrcamento={(orcamento) =>
            setOrcamentoSelecionadoId(orcamento.id)
          }
        />
      )}
    </AppLayout>
  );
}

export default App;