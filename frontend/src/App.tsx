import { useState } from "react";

import { AppLayout } from "./layouts/AppLayout";

import { OrcamentosPage } from "./pages/OrcamentosPage";
import { OrcamentoDetalhePage } from "./pages/OrcamentoDetalhePage";

import type {
  SecaoOrcamentoPagina,
  SecaoSistema,
} from "./types/navegacao";

import { useOrcamentoStore } from "./store/orcamentoStore";

function App() {
  const [secaoSistemaAtiva, setSecaoSistemaAtiva] =
    useState<SecaoSistema>("orcamentos");

  const [secaoOrcamentoAtiva, setSecaoOrcamentoAtiva] =
    useState<SecaoOrcamentoPagina>("resumo");

  const {
    orcamentos,
    orcamentoSelecionadoId,
    selecionarOrcamento,
    voltarParaOrcamentos,
    atualizarFormacaoPreco,
    adicionarItemOrcamento,
  } = useOrcamentoStore();

  const orcamentoSelecionado =
    orcamentos.find(
      (orcamento) =>
        orcamento.id ===
        orcamentoSelecionadoId
    ) ?? null;

  return (
    <AppLayout
      orcamentoAberto={
        orcamentoSelecionado !== null
      }
      secaoSistemaAtiva={
        secaoSistemaAtiva
      }
      secaoOrcamentoAtiva={
        secaoOrcamentoAtiva
      }
      onSelecionarSecaoSistema={
        setSecaoSistemaAtiva
      }
      onSelecionarSecaoOrcamento={
        setSecaoOrcamentoAtiva
      }
    >
      {orcamentoSelecionado ? (
        <OrcamentoDetalhePage
          orcamento={
            orcamentoSelecionado
          }
          secaoAtiva={
            secaoOrcamentoAtiva
          }
          onVoltar={
            voltarParaOrcamentos
          }
          onAtualizarFormacaoPreco={(
            novaFormacaoPreco
          ) =>
            atualizarFormacaoPreco(
              orcamentoSelecionado.id,
              novaFormacaoPreco
            )
          }
          onAdicionarEquipamento={(
            tipoId,
            item
          ) =>
            adicionarItemOrcamento(
              orcamentoSelecionado.id,
              "VENTILACAO",
              "EQUIPAMENTOS",
              tipoId,
              item
            )
          }
        />
      ) : (
        <OrcamentosPage
          orcamentos={orcamentos}
          onSelecionarOrcamento={(
            orcamento
          ) =>
            selecionarOrcamento(
              orcamento.id
            )
          }
        />
      )}
    </AppLayout>
  );
}

export default App;