import { useState } from "react";
import type { NovoItemOrcamento, TipoFaturamento, Unidade } from "../types/orcamento";

interface EquipamentoFormProps {
  onFechar: () => void;
  onSalvar: (tipoId: string, item: NovoItemOrcamento) => void;
}

export function EquipamentoForm({ onFechar, onSalvar }: EquipamentoFormProps) {
  const [tipoId, setTipoId] = useState("tipo-exaustor");
  const [tag, setTag] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [unidade, setUnidade] = useState<Unidade>("un");
  const [tipoFaturamento, setTipoFaturamento] =
    useState<TipoFaturamento>("direto");
  const [valorMaterialUnitario, setValorMaterialUnitario] = useState(0);
  const [valorMaoObraUnitario, setValorMaoObraUnitario] = useState(0);
  const [modelo, setModelo] = useState("");
  const [usarSimilarEquivalente, setUsarSimilarEquivalente] = useState(true);
  const [tipoVentilador, setTipoVentilador] = useState("");
  const [tipoRotor, setTipoRotor] = useState("");
  const [quantidadeAspiracao, setQuantidadeAspiracao] = useState("");
  const [vazao, setVazao] = useState("");
  const [pressao, setPressao] = useState("");
  const [tensao, setTensao] = useState("");
  const [acessorios, setAcessorios] = useState("");

  function salvarEquipamento() {
    onSalvar(tipoId, {
      tag,
      descricao,
      fabricante,
      modelo,
      usarSimilarEquivalente,
      quantidade,
      unidade,
      tipoFaturamento,
      valorMaterialUnitario,
      valorMaoObraUnitario,
      valorIndiretoUnitario: 0,
    });

    onFechar();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/40 px-4 py-6">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Novo equipamento
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              Cadastre um equipamento de ventilação para o orçamento.
            </p>
          </div>

          <button
            onClick={onFechar}
            className="rounded-lg px-3 py-1 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          >
            ✕
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Campo
            label="Tag"
            placeholder="EX-01"
            value={tag}
            onChange={setTag}
          />

          <Campo
            label="Fabricante"
            placeholder="Soler & Palau"
            value={fabricante}
            onChange={setFabricante}
          />

          <Campo
            label="Modelo"
            placeholder="CVTT"
            value={modelo}
            onChange={setModelo}
          />

          <div className="md:col-span-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={usarSimilarEquivalente}
                onChange={(event) =>
                  setUsarSimilarEquivalente(event.target.checked)
                }
                className="h-4 w-4 rounded border-slate-300"
              />

              <span className="text-sm text-slate-600">
                Adicionar “ou similar equivalente”
              </span>
            </label>
          </div>

          <Campo
            label="Quantidade"
            placeholder="1"
            type="number"
            value={String(quantidade)}
            onChange={(valor) => setQuantidade(Number(valor))}
          />

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Unidade</span>

            <select
              value={unidade}
              onChange={(event) => setUnidade(event.target.value as Unidade)}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
            >
              <option value="un">un</option>
              <option value="pc">pc</option>
              <option value="cj">cj</option>
              <option value="vb">vb</option>
            </select>
          </label>

          <Campo
            label="Preço do equipamento"
            placeholder="8500"
            type="number"
            value={String(valorMaterialUnitario)}
            onChange={(valor) => setValorMaterialUnitario(Number(valor))}
          />

          <Campo
            label="Mão de obra instalação"
            placeholder="1200"
            type="number"
            value={String(valorMaoObraUnitario)}
            onChange={(valor) => setValorMaoObraUnitario(Number(valor))}
          />
        </div>
        {tipoId === "tipo-exaustor" && (
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-sm font-bold text-slate-900">
                  Dados técnicos do exaustor
                </h5>

                <p className="mt-1 text-xs text-slate-500">
                  Informações utilizadas futuramente na geração automática de descrição.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Campo
                label="Tipo do ventilador"
                placeholder="Gabinete"
                value={tipoVentilador}
                onChange={setTipoVentilador}
              />

              <Campo
                label="Tipo do rotor"
                placeholder="Sirocco"
                value={tipoRotor}
                onChange={setTipoRotor}
              />

              <Campo
                label="Aspiração"
                placeholder="Dupla Aspiração"
                value={quantidadeAspiracao}
                onChange={setQuantidadeAspiracao}
              />

              <Campo
                label="Vazão"
                placeholder="3500"
                value={vazao}
                onChange={setVazao}
              />

              <Campo
                label="Pressão"
                placeholder="15"
                value={pressao}
                onChange={setPressao}
              />

              <Campo
                label="Tensão"
                placeholder="220V/3F"
                value={tensao}
                onChange={setTensao}
              />
            </div>

            <div className="mt-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Acessórios adicionais
                </span>

                <textarea
                  rows={3}
                  value={acessorios}
                  onChange={(event) => setAcessorios(event.target.value)}
                  placeholder="Filtro G4, inversor de frequência, pintura epóxi..."
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
                />
              </label>
            </div>
          </div>
        )}
        <div className="mt-4">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Descrição do produto
            </span>

            <textarea
              rows={4}
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              placeholder="Descreva o equipamento..."
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </label>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Tipo do equipamento
            </span>

            <select
              value={tipoId}
              onChange={(event) => setTipoId(event.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
            >
              <option value="tipo-exaustor">Exaustores</option>
              <option value="tipo-ventilador">Ventiladores</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Faturamento
            </span>

            <select
              value={tipoFaturamento}
              onChange={(event) =>
                setTipoFaturamento(event.target.value as TipoFaturamento)
              }
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
            >
              <option value="direto">Faturamento direto</option>
              <option value="fornecimento_3d">Fornecimento 3D</option>
            </select>
          </label>
        </div>

        <div className="mt-6 flex justify-end gap-3 border-t border-slate-200 pt-4">
          <button
            onClick={onFechar}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancelar
          </button>

          <button
            onClick={salvarEquipamento}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Salvar equipamento
          </button>
        </div>
      </div>
    </div>
  );
}

interface CampoProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (valor: string) => void;
  type?: string;
}

function Campo({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: CampoProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
      />
    </label>
  );
}