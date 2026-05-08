import { useState } from "react";
import { AppLayout } from "./layouts/AppLayout";
import { mockOrcamentos } from "./data/mockOrcamento";
import { OrcamentosPage } from "./pages/OrcamentosPage";
import { OrcamentoDetalhePage } from "./pages/OrcamentoDetalhePage";
import type { FormacaoPreco, Orcamento, NovoItemOrcamento } from "./types/orcamento";
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

  function adicionarItemOrcamento(
    orcamentoId: string,
    macrogrupoTipo: string,
    secaoTipo: string,
    tipoId: string,
    novoItem: NovoItemOrcamento
  ) {
    setOrcamentos((orcamentosAtuais) =>
      orcamentosAtuais.map((orcamento) => {
        if (orcamento.id !== orcamentoId) {
          return orcamento;
        }

        return {
          ...orcamento,
          macrogrupos: orcamento.macrogrupos.map((macrogrupo) => {
            if (macrogrupo.tipo !== macrogrupoTipo) {
              return macrogrupo;
            }

            return {
              ...macrogrupo,
              secoes: macrogrupo.secoes.map((secao) => {
                if (secao.tipo !== secaoTipo) {
                  return secao;
                }

                return {
                  ...secao,
                  tipos: secao.tipos.map((tipo) => {
                    if (tipo.id !== tipoId) {
                      return tipo;
                    }

                    return {
                      ...tipo,
                      itens: [
                        ...tipo.itens,
                        {
                          id: crypto.randomUUID(),
                          ...novoItem,
                        },
                      ],
                    };
                  }),
                };
              }),
            };
          }),
        };
      })
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
            atualizarFormacaoPreco(
              orcamentoSelecionado.id,
              novaFormacaoPreco
            )
          }
          onAdicionarEquipamento={(tipoId, item) =>
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
          onSelecionarOrcamento={selecionarOrcamento}
        />
      )}
    </AppLayout>
  );
}

export default App;