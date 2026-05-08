import { useState } from "react";
import { AppLayout } from "./layouts/AppLayout";
import { mockOrcamentos } from "./data/mockOrcamento";
import { OrcamentosPage } from "./pages/OrcamentosPage";
import { OrcamentoDetalhePage } from "./pages/OrcamentoDetalhePage";
import type { FormacaoPreco, Orcamento } from "./types/orcamento";
import type {
  SecaoOrcamentoPagina,
  SecaoSistema,
} from "./types/navegacao";

function App() {
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>(mockOrcamentos);

  const [orcamentoSelecionadoId, setOrcamentoSelecionadoId] = useState<
    string | null
  >(null);

  const [secaoSistemaAtiva, setSecaoSistemaAtiva] =
    useState<SecaoSistema>("orcamentos");

  const [secaoOrcamentoAtiva, setSecaoOrcamentoAtiva] =
    useState<SecaoOrcamentoPagina>("resumo");

  const orcamentoSelecionado =
    orcamentos.find((orcamento) => orcamento.id === orcamentoSelecionadoId) ??
    null;

  function selecionarOrcamento(orcamento: Orcamento) {
    setOrcamentoSelecionadoId(orcamento.id);
    setSecaoOrcamentoAtiva("resumo");
  }

  function voltarParaOrcamentos() {
    setOrcamentoSelecionadoId(null);
    setSecaoSistemaAtiva("orcamentos");
  }

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
    <AppLayout
      orcamentoAberto={orcamentoSelecionado !== null}
      secaoSistemaAtiva={secaoSistemaAtiva}
      secaoOrcamentoAtiva={secaoOrcamentoAtiva}
      onSelecionarSecaoSistema={setSecaoSistemaAtiva}
      onSelecionarSecaoOrcamento={setSecaoOrcamentoAtiva}
    >
      {orcamentoSelecionado ? (
        <OrcamentoDetalhePage
          orcamento={orcamentoSelecionado}
          secaoAtiva={secaoOrcamentoAtiva}
          onVoltar={voltarParaOrcamentos}
          onAtualizarFormacaoPreco={(novaFormacaoPreco) =>
            atualizarFormacaoPreco(orcamentoSelecionado.id, novaFormacaoPreco)
          }
        />
      ) : (
        <OrcamentosPage
          orcamentos={orcamentos}
          onSelecionarOrcamento={selecionarOrcamento}
        />
      )}
    </AppLayout>
  );
}

export default App;