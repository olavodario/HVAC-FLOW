export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-slate-200 bg-white px-4 py-5">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-slate-900">HVAC Flow</h1>
        <p className="text-sm text-slate-500">Orçamentos 3D</p>
      </div>

      <nav className="space-y-1">
        <a className="block rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-900">
          Orçamentos
        </a>

        <a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
          Categorias
        </a>

        <a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
          Configurações
        </a>
      </nav>
    </aside>
  );
}