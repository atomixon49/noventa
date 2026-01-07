"use client";

import { useEffect, useMemo, useState } from "react";

type CopyChange = {
  route: string;
  lang: string;
  selectorType: "copyId" | "cssPath";
  copyId?: string;
  selector: string;
  domPath: string;
  before: string;
  after: string;
  updatedAt: string;
};

export function CopyEditorPanel({
  enabled,
  route,
  currentLang,
  changes,
  downloadJson,
  clearAll,
  selection,
  onClose,
  onApply,
  onDisable,
}: {
  enabled: boolean;
  route: string;
  currentLang: string;
  changes: CopyChange[];
  downloadJson: () => void;
  clearAll: () => void;
  selection: {
    selectorType: "copyId" | "cssPath";
    copyId?: string;
    selector: string;
    domPath: string;
    before: string;
  } | null;
  onClose: () => void;
  onApply: (after: string) => void;
  onDisable: () => void;
}) {
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (!selection) return;
    setDraft(selection.before);
  }, [selection]);

  const routeChanges = useMemo(() => {
    return changes.filter((c) => c.route === route && c.lang === currentLang);
  }, [changes, route, currentLang]);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-[360px] max-w-[calc(100vw-2rem)]">
      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/95 shadow-2xl backdrop-blur px-4 py-3 text-white">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-sm font-semibold">Copy Edit Mode</div>
            <div className="text-xs text-slate-300 mt-0.5">Ctrl+Shift+B para activar/desactivar • Alt+Click para seleccionar</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onDisable}
              className="rounded-lg px-2 py-1 text-xs text-slate-300 hover:text-white hover:bg-white/10"
              title="Desactivar modo de edición"
            >
              Desactivar
            </button>
          </div>
        </div>

        <div className="mt-3 rounded-xl bg-black/20 border border-white/10 p-3">
          <div className="text-xs text-slate-400">Ruta</div>
          <div className="text-sm font-medium truncate">{route}</div>
          <div className="mt-2 text-xs text-slate-400">Idioma</div>
          <div className="text-sm font-medium">{currentLang.toUpperCase()}</div>
        </div>

        {selection ? (
          <div className="mt-3">
            <div className="text-xs text-slate-400">Identificador</div>
            <div className="text-xs font-mono break-all mt-1">
              {selection.selectorType === "copyId" ? selection.copyId : selection.selector}
            </div>

            <div className="mt-3 text-xs text-slate-400">DOM path</div>
            <div className="text-[11px] font-mono break-all mt-1 text-slate-300">{selection.domPath}</div>

            <div className="mt-3 text-xs text-slate-400">Editar</div>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded-xl bg-slate-950/60 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500/40"
            />

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => onApply(draft)}
                className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500"
              >
                Guardar cambio
              </button>
              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-3 text-sm text-slate-300">
            Selecciona un texto con Alt+Click o click sobre un texto con `data-copy-id`.
          </div>
        )}

        <div className="mt-4 border-t border-white/10 pt-3">
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm font-semibold">Cambios ({routeChanges.length})</div>
            <button
              onClick={downloadJson}
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 hover:bg-cyan-500/20"
            >
              Descargar JSON
            </button>
          </div>

          {routeChanges.length > 0 ? (
            <div className="mt-2 max-h-40 overflow-auto space-y-2">
              {routeChanges.slice(0, 20).map((c: CopyChange) => (
                <div key={`${c.lang}:${c.selector}`} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <div className="text-[11px] font-mono text-slate-300 break-all">
                    {c.selectorType === "copyId" ? c.copyId : c.selector}
                  </div>
                  <div className="mt-1 text-xs text-slate-400 line-clamp-2">{c.before}</div>
                  <div className="mt-1 text-xs text-white line-clamp-2">{c.after}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-2 text-xs text-slate-400">Aún no hay cambios en esta ruta/idioma.</div>
          )}

          <div className="mt-3 flex gap-2">
            <button
              onClick={clearAll}
              className="flex-1 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-200 hover:bg-red-500/20"
            >
              Limpiar todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
