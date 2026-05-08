import { create } from "zustand";

import { mockOrcamentos } from "../data/mockOrcamento";

import type {
  FormacaoPreco,
  NovoItemOrcamento,
  Orcamento,
} from "../types/orcamento";

interface OrcamentoStore {
  orcamentos: Orcamento[];

  orcamentoSelecionadoId: string | null;

  selecionarOrcamento: (
    orcamentoId: string
  ) => void;

  voltarParaOrcamentos: () => void;

  atualizarFormacaoPreco: (
    orcamentoId: string,
    novaFormacaoPreco: FormacaoPreco
  ) => void;

  adicionarItemOrcamento: (
    orcamentoId: string,
    macrogrupoTipo: string,
    secaoTipo: string,
    tipoId: string,
    novoItem: NovoItemOrcamento
  ) => void;

  editarItemOrcamento: (
    orcamentoId: string,
    macrogrupoTipo: string,
    secaoTipo: string,
    tipoId: string,
    itemId: string,
    itemAtualizado: Partial<NovoItemOrcamento>
  ) => void;

  excluirItemOrcamento: (
    orcamentoId: string,
    macrogrupoTipo: string,
    secaoTipo: string,
    tipoId: string,
    itemId: string
  ) => void;
}

export const useOrcamentoStore =
  create<OrcamentoStore>((set) => ({
    orcamentos: mockOrcamentos,

    orcamentoSelecionadoId: null,

    selecionarOrcamento: (
      orcamentoId
    ) =>
      set({
        orcamentoSelecionadoId:
          orcamentoId,
      }),

    voltarParaOrcamentos: () =>
      set({
        orcamentoSelecionadoId: null,
      }),

    atualizarFormacaoPreco: (
      orcamentoId,
      novaFormacaoPreco
    ) =>
      set((state) => ({
        orcamentos:
          state.orcamentos.map(
            (orcamento) =>
              orcamento.id ===
              orcamentoId
                ? {
                    ...orcamento,
                    formacaoPreco:
                      novaFormacaoPreco,
                  }
                : orcamento
          ),
      })),

    adicionarItemOrcamento: (
      orcamentoId,
      macrogrupoTipo,
      secaoTipo,
      tipoId,
      novoItem
    ) =>
      set((state) => ({
        orcamentos:
          state.orcamentos.map(
            (orcamento) => {
              if (
                orcamento.id !==
                orcamentoId
              ) {
                return orcamento;
              }

              return {
                ...orcamento,

                macrogrupos:
                  orcamento.macrogrupos.map(
                    (macrogrupo) => {
                      if (
                        macrogrupo.tipo !==
                        macrogrupoTipo
                      ) {
                        return macrogrupo;
                      }

                      return {
                        ...macrogrupo,

                        secoes:
                          macrogrupo.secoes.map(
                            (secao) => {
                              if (
                                secao.tipo !==
                                secaoTipo
                              ) {
                                return secao;
                              }

                              return {
                                ...secao,

                                tipos:
                                  secao.tipos.map(
                                    (
                                      tipo
                                    ) => {
                                      if (
                                        tipo.id !==
                                        tipoId
                                      ) {
                                        return tipo;
                                      }

                                      return {
                                        ...tipo,

                                        itens:
                                          [
                                            ...tipo.itens,

                                            {
                                              id: crypto.randomUUID(),

                                              ...novoItem,
                                            },
                                          ],
                                      };
                                    }
                                  ),
                              };
                            }
                          ),
                      };
                    }
                  ),
              };
            }
          ),
      })),

      editarItemOrcamento: (
    orcamentoId,
    macrogrupoTipo,
    secaoTipo,
    tipoId,
    itemId,
    itemAtualizado
  ) =>
    set((state) => ({
      orcamentos: state.orcamentos.map((orcamento) => {
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
                      itens: tipo.itens.map((item) =>
                        item.id === itemId
                          ? {
                              ...item,
                              ...itemAtualizado,
                            }
                          : item
                      ),
                    };
                  }),
                };
              }),
            };
          }),
        };
      }),
    })),

  excluirItemOrcamento: (
    orcamentoId,
    macrogrupoTipo,
    secaoTipo,
    tipoId,
    itemId
  ) =>
    set((state) => ({
      orcamentos: state.orcamentos.map((orcamento) => {
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
                      itens: tipo.itens.filter((item) => item.id !== itemId),
                    };
                  }),
                };
              }),
            };
          }),
        };
      }),
    })),
  }));